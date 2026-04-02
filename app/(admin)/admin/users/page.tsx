"use client";

import { useState } from "react";

const initialUsers = [
  { id: 1, name: "mamuka gamer", email: "mamukagamer@mail.com", role: "user", createdAt: "1 year ago", active: false },
  { id: 2, name: "ninja_lord", email: "ninjalord@mail.com", role: "admin", createdAt: "2 months ago", active: true },
  { id: 3, name: "pixel_queen", email: "pixelqueen@mail.com", role: "user", createdAt: "3 weeks ago", active: true },
  { id: 4, name: "darkstar99", email: "darkstar99@mail.com", role: "moderator", createdAt: "6 months ago", active: false },
  { id: 5, name: "xXshadowXx", email: "shadow@mail.com", role: "user", createdAt: "1 month ago", active: true },
  { id: 6, name: "speedrunner", email: "speed@mail.com", role: "user", createdAt: "2 years ago", active: false },
  { id: 7, name: "lagg3r", email: "lagg3r@mail.com", role: "user", createdAt: "5 days ago", active: true },
];

const ROLE_COLORS: Record<string, string> = {
  admin: "text-orange-600 bg-orange-50 border border-orange-200",
  moderator: "text-yellow-700 bg-yellow-50 border border-yellow-200",
  user: "text-gray-500 bg-gray-100 border border-gray-200",
};

const avatarColors = [
  "from-orange-500 to-red-600",
  "from-purple-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-pink-500 to-rose-600",
  "from-blue-500 to-cyan-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
];

export default function UsersTable() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filtered = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesTitle = u.name.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesStatus =
      filterStatus === "" ||
      (filterStatus === "active" && u.active) ||
      (filterStatus === "inactive" && !u.active);
    return matchesSearch && matchesTitle && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / entries);
  const paginated = filtered.slice((currentPage - 1) * entries, currentPage * entries);

  const toggleActive = (id: number) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, active: !u.active } : u))
    );
  };

  const clearFilters = () => {
    setFilterTitle("");
    setFilterStatus("");
    setSearch("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6 font-sans">
      <div className="max-w-full mx-auto space-y-4">

        {/* Filter card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Filter</p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Name"
              value={filterTitle}
              onChange={(e) => { setFilterTitle(e.target.value); setCurrentPage(1); }}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 w-44 transition-all"
            />
            <select
              value={filterStatus}
              onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 w-36 transition-all bg-white"
            >
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <input
              type="text"
              placeholder="Search…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 w-44 transition-all"
            />
            <button
              onClick={() => setCurrentPage(1)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
            >
              Filter
            </button>
            <button
              onClick={clearFilters}
              className="border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium px-5 py-2 rounded-lg transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Main table card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Card header */}
          <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">User Management</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Show</span>
              <select
                value={entries}
                onChange={(e) => { setEntries(Number(e.target.value)); setCurrentPage(1); }}
                className="border border-gray-200 rounded-lg px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 bg-white"
              >
                {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <span className="text-sm text-gray-400">entries</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-3 w-10">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                  </th>
                  {["Image", "Name", "Email", "Role", "Created At", "Status", "Action"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginated.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/60 transition-colors group">

                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                    </td>

                    {/* Avatar */}
                    <td className="px-4 py-4">
                      <div
                        className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[user.id % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shadow`}
                      >
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    </td>

                    {/* Name */}
                    <td className="px-4 py-4">
                      <span className="text-gray-800 text-sm font-medium">{user.name}</span>
                    </td>

                    {/* Email */}
                    <td className="px-4 py-4">
                      <span className="text-gray-500 text-sm">{user.email}</span>
                    </td>

                    {/* Role */}
                    <td className="px-4 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${ROLE_COLORS[user.role] ?? ROLE_COLORS.user}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>

                    {/* Created */}
                    <td className="px-4 py-4">
                      <span className="text-gray-400 text-sm">{user.createdAt}</span>
                    </td>

                    {/* Toggle */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleActive(user.id)}
                        className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                          user.active ? "bg-green-400" : "bg-gray-200"
                        }`}
                        aria-label="Toggle status"
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                            user.active ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-6 py-16 text-center text-gray-400 text-sm">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
            <p className="text-gray-400 text-xs">
              Showing{" "}
              <span className="text-gray-600 font-medium">
                {filtered.length === 0 ? 0 : (currentPage - 1) * entries + 1}
              </span>{" "}
              to{" "}
              <span className="text-gray-600 font-medium">
                {Math.min(currentPage * entries, filtered.length)}
              </span>{" "}
              of{" "}
              <span className="text-gray-600 font-medium">{filtered.length}</span> entries
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    page === currentPage
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
              >
                ›
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}