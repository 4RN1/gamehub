"use client"
import { Handshake, Users } from "lucide-react";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link"
import { redirect, usePathname } from "next/navigation";
import { MdForum, MdOutlineSupportAgent, MdPostAdd } from "react-icons/md";

const links = [
 
  {
    group: "Content",
    items: [
      { href: "/dashboard/news-list", label: "News List", icon: <FaClipboardList size={20} /> },
      { href: "/dashboard/add-news", label: "Add News", icon: <MdPostAdd size={20} /> },
    ]
  },
  {
    group: "Support",
    items: [
      { href: "/dashboard/support", label: "Support Messages", icon: <MdOutlineSupportAgent size={20} /> },
    ]
  }
]

const AdminSidebar = () => {
  const path = usePathname();

  if (path === '/admin') return null;

  return (
    <div className="bg-blue-950 w-64 relative">
      <div className="fixed h-screen flex flex-col">

      {/* Header */}
      <div className="border-b border-blue-800 text-center py-5 px-4">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold italic tracking-wide text-white hover:text-blue-300 transition-colors">
            Admin Panel
          </h1>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-6 px-4 py-6 flex-1">
        {links.map(({ group, items }) => (
          <div key={group}>
            <p className="text-xs text-blue-400 uppercase tracking-widest mb-2">{group}</p>
            <div className="flex flex-col gap-1">
              {items.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                    path === href
                      ? "bg-blue-700 text-white"
                      : "text-blue-100 hover:bg-blue-900 hover:text-white"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-6 border-t border-blue-800">
        <button
          onClick={() => redirect('/login')}
          className="w-full py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold italic tracking-wide transition-colors cursor-pointer"
        >
          LOGOUT
        </button>
      </div>
</div>
    </div>
  )
}

export default AdminSidebar