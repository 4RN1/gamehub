"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useEffect, useState } from "react";

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
import Image from "next/image";
import { createPost } from "@/app/actions/createPost";
import { slugify } from "@/utils/slugify";


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

export default function CreateNews() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [shortDescription, setShortDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [success, setSuccess] = useState(false);
  const [manual, setManual] = useState(false);

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [2, 3],
      },
    }),
  ],
  content: "<p>Start writing your article here...</p>",
  immediatelyRender: false,
  editorProps: {
    attributes: {
      class: "min-h-[320px] px-5 py-4 text-sm text-gray-800 leading-relaxed outline-none prose max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold prose-ul:list-disc prose-ol:list-decimal prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic",
    },
  },
});

  const tags = [
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
    "Romantic"


  ];

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSubmit = async () => {
    const html = editor?.getHTML();
    console.log({
    slug,
    image_url: coverImage,
    title,
    short_desc: shortDescription,
    post_content: html ?? "",
    category,
    tags: selectedTags,     
    });

    await createPost({
      slug,
      image_url: coverImage,
    title,
    short_desc: shortDescription,
    post_content: html ?? "",
    category,
    tags: selectedTags,
    })
  

    setTitle("");
  setCategory("");
  setCoverImage("");
  setSelectedTags([]);
  setShortDescription("");
  setSlug("");
  editor?.commands.clearContent();

  setSuccess(true);
  setTimeout(() => setSuccess(false), 3000);

  };


   useEffect(() => {
    if (!manual) {
      setSlug(slugify(title));
    }
  }, [title, manual]);
  

  if (!editor) return null;

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Admin / News
            </p>
            <h1 className="text-2xl font-bold tracking-wide text-black">
              Create Article
            </h1>
          </div>
         
        </div>

        {/* Meta fields */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Article Details
            </p>
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

            {/* Category + Cover image + Tags*/}
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
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://..."
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <label
                    key={tag}
                    className="flex cursor-pointer items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-800 hover:border-blue-700 has-checked:border-blue-700 has-checked:bg-blue-50 has-checked:text-blue-700"
                  >
                    <input
                      type="checkbox"
                      value={tag.toLowerCase()}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="hidden"
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </div>

            {/* Cover preview */}
            {coverImage && (
              <div className="overflow-hidden rounded-lg border border-gray-200 relative">
                <img
                  src={coverImage}
                  alt="Cover preview"
                  // fill
                  className="h-48 w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            )}


            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Short Description
              </label>
              <input
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Enter short description... (max:150 characters)"
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Slug
              </label>
              <input
                value={slug}
                onChange={(e) => setSlug(slugify(e.target.value))}
                readOnly
                placeholder="Enter URL slug... (e.g. my-article-title)"
                className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
              />
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
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
              {editor.storage.characterCount?.words?.() ??
                editor.getText().trim().split(/\s+/).filter(Boolean)
                  .length}{" "}
              words
            </div>
          </div>

          {/* Editor area */}
          <EditorContent editor={editor} />
        </div>

        {/* Status badge */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="h-9 rounded-md bg-blue-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Publish
          </button>
        </div>
      </div>
     {success && (
  <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-green-500/20 bg-zinc-900 px-5 py-3.5 shadow-2xl shadow-black/40">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/10">
      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <p className="text-md font-semibold text-white">Post Published!</p>
      <p className="text-xs text-zinc-400">Your article is now live</p>
    </div>
  </div>
)}
    </div>
  );
}
