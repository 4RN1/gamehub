"use client";

import { UpdatePost } from "@/app/actions/updatePost";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Minus,
} from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  image_url: string;
  short_desc: string;
  tags: string[];
  post_content: string;
}

interface EditNewsModalProps {
  open: boolean;
  onclose: () => void;
  newsItem: NewsItem | null;
}

type ToolbarButtonProps = {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
};

const ToolbarButton = ({
  onClick,
  isActive,
  disabled,
  title,
  children,
}: ToolbarButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`flex h-8 w-8 items-center justify-center rounded-md border text-sm transition-colors
      ${
        isActive
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
      }
      disabled:cursor-not-allowed disabled:opacity-40`}
  >
    {children}
  </button>
);

const Divider = () => <div className="mx-1 h-6 w-px bg-gray-200" />;

const ALL_TAGS = [
  "Action",
  "Adventure",
  "RPGs",
  "Simulation",
  "Sports",
  "Puzzle",
  "Horror",
  "Fighting",
  "Racing",
  "Shooter",
  "MMORPG",
  "Survival",
  "Multiplayer",
  "Open World",
  "Romantic",
];

const EditNewsModal = ({ open, onclose, newsItem }: EditNewsModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [newsSlug, setNewsSlug] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[320px] px-5 py-4 text-sm text-gray-800 leading-relaxed outline-none prose max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic",
      },
    },
  });

  // Sync fields when newsItem changes
  useEffect(() => {
    if (newsItem) {
      setTitle(newsItem.title);
      setCategory(newsItem.category);
      setImgUrl(newsItem.image_url);
      setShortDesc(newsItem.short_desc);
      setNewsSlug(newsItem.slug);
      setTags(newsItem.tags ?? []);

      // Set editor content once editor is ready
      if (editor && newsItem.post_content) {
        editor.commands.setContent(newsItem.post_content);
      }
    }
  }, [newsItem, editor]);

  const handleTagChange = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  if (!open || !editor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Admin / News
            </p>
            <h1 className="text-2xl font-bold tracking-wide text-white">
              Edit Article
            </h1>
          </div>
        </div>

        {/* Meta fields card */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Article Details
            </p>
            <CgClose
              color="red"
              size={23}
              onClick={onclose}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-4 p-6">
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter article title..."
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
              />
            </div>

            {/* Category + Cover Image */}
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none focus:border-blue-700"
                >
                  <option value="">Select category...</option>
                  <option value="gaming">Gaming</option>
                  <option value="technology">Technology</option>
                  <option value="console">Console Games</option>
                </select>
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Cover Image URL
                </label>
                <input
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  placeholder="https://..."
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                />
              </div>
            </div>

            {/* Cover preview */}
            {imgUrl && (
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <img
                  src={imgUrl}
                  alt="Cover preview"
                  className="h-48 w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((tag) => (
                  <label
                    key={tag}
                    className="flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-800 hover:border-blue-700 has-checked:border-blue-700 has-checked:bg-blue-50 has-checked:text-blue-700"
                  >
                    <input
                      type="checkbox"
                      value={tag.toLowerCase()}
                      checked={tags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="hidden"
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </div>

            {/* Short Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Short Description
              </label>
              <input
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                placeholder="Enter short description... (max:150 characters)"
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
              />
            </div>

            {/* Slug */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Slug
              </label>
              <input
                value={newsSlug}
                onChange={(e) => setNewsSlug(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
              />
            </div>
          </div>
        </div>

        {/* Editor card */}
        <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Content
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              isActive={editor.isActive("bold")}
              title="Bold"
            >
              <Bold size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isActive={editor.isActive("italic")}
              title="Italic"
            >
              <Italic size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              isActive={editor.isActive("strike")}
              title="Strikethrough"
            >
              <Strikethrough size={14} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              isActive={editor.isActive("heading", { level: 3 })}
              title="Heading 3"
            >
              <Heading3 size={14} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              isActive={editor.isActive("bulletList")}
              title="Bullet List"
            >
              <List size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              isActive={editor.isActive("orderedList")}
              title="Ordered List"
            >
              <ListOrdered size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              isActive={editor.isActive("blockquote")}
              title="Blockquote"
            >
              <Quote size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              title="Horizontal Rule"
            >
              <Minus size={14} />
            </ToolbarButton>

            <Divider />

            <ToolbarButton
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              title="Undo"
            >
              <Undo size={14} />
            </ToolbarButton>
            <ToolbarButton
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              title="Redo"
            >
              <Redo size={14} />
            </ToolbarButton>

            {/* Word count */}
            <div className="ml-auto text-xs text-gray-400">
              {editor.getText().trim().split(/\s+/).filter(Boolean).length} words
            </div>
          </div>

          {/* Editor area */}
          <EditorContent editor={editor} />
        </div>

        {/* Save button */}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={async () => {
              await UpdatePost({
                id: newsItem!.id,
                slug: newsSlug,
                title,
                category,
                image_url: imgUrl,
                short_desc: shortDesc,
                post_content: editor.getHTML(),
                tags,
              });
              onclose();
            }}
            className="h-9 rounded-md bg-blue-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNewsModal;