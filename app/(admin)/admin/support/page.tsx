"use client";
import { useState } from "react";
import { X } from "lucide-react";

const tickets = [
  {
    id: 1,
    subject: "I lost my account",
    user: "John Doe",
    status: "Open",
    createdAt: "Apr 2, 2026, 10:30 am",
  },
  {
    id: 2,
    subject: "Payment not working",
    user: "Anna",
    status: "Pending",
    createdAt: "Apr 2, 2026, 11:00 am",
  },
  {
    id: 3,
    subject: "Bug in matchmaking",
    user: "Mike",
    status: "Closed",
    createdAt: "Apr 2, 2026, 12:00 pm",
  },
];

const statusStyles: Record<string, string> = {
  Open: "bg-green-100 text-green-700 border-green-200",
  Pending: "bg-orange-100 text-orange-600 border-orange-200",
  Closed: "bg-gray-100 text-gray-500 border-gray-200",
};

export default function SupportList() {
  const [selected, setSelected] = useState<number[]>([]);
  const [subjectFilter, setSubjectFilter] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [applied, setApplied] = useState({ subject: "", user: "", status: "" });

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const toggleAll = () =>
    setSelected(selected.length === filtered.length ? [] : filtered.map((t) => t.id));

  const handleFilter = () =>
    setApplied({ subject: subjectFilter, user: userFilter, status: statusFilter });

  const handleClear = () => {
    setSubjectFilter("");
    setUserFilter("");
    setStatusFilter("");
    setApplied({ subject: "", user: "", status: "" });
  };

  const filtered = tickets.filter(
    (t) =>
      t.subject.toLowerCase().includes(applied.subject.toLowerCase()) &&
      t.user.toLowerCase().includes(applied.user.toLowerCase()) &&
      t.status.toLowerCase().includes(applied.status.toLowerCase())
  );

  const allChecked = filtered.length > 0 && selected.length === filtered.length;

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 flex flex-col gap-5">

      {/* Filter */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Filter
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            placeholder="Subject"
            className="h-9 w-44 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
          />
          <input
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
            placeholder="User"
            className="h-9 w-44 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
          />
          <input
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="Status"
            className="h-9 w-44 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
          />
          <button
            onClick={handleFilter}
            className="h-9 rounded-md bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
          >
            Filter
          </button>
          <button
            onClick={handleClear}
            className="h-9 rounded-md border border-blue-700 px-5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-black">Support</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-10" />
              <col className="w-[30%]" />
              <col className="w-[18%]" />
              <col className="w-[14%]" />
              <col className="w-[22%]" />
              <col className="w-[16%]" />
            </colgroup>

            <thead>
              <tr className="border-b border-gray-200">
                {/* select-all checkbox */}
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={toggleAll}
                    className="accent-orange-600 h-4 w-4"
                  />
                </th>
                {["Subject", "User", "Status", "Created At", "Action"].map((h) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400 ${
                      h === "Action" ? "text-right pr-7" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">
                    No tickets match your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 transition-colors hover:bg-gray-50 last:border-0"
                  >
                    {/* checkbox */}
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        onChange={() => toggle(item.id)}
                        className="accent-orange-600 h-4 w-4"
                      />
                    </td>

                    {/* subject */}
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 truncate">
                      {item.subject}
                    </td>

                    {/* user */}
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.user}
                    </td>

                    {/* status */}
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${
                          statusStyles[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* date */}
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {item.createdAt}
                    </td>

                    {/* actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button className="flex h-7 items-center justify-center rounded-md border border-gray-200 px-3 text-xs font-semibold text-gray-600 transition-colors hover:border-blue-500 hover:text-blue-500">
                          Open
                        </button>
                        <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition-colors hover:border-orange-500 hover:text-orange-500">
                          <X size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}