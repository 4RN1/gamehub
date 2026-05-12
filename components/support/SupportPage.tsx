"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { resolveTicket } from "@/app/actions/resolveTicket";
import { deleteSupportMsg } from "@/app/actions/deleteSupportMsg";


interface supportType {
  id: number;
  user_name: string;
  user_email: string;
  user_message: string;
  created_at: string;
  resolved: boolean;
}

interface support {
  database: supportType[];
}

export default function SupportList({ database }: support) {
  const [subjectFilter, setSubjectFilter] = useState("");
  const [userFilter, setUserFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedTicket, setSelectedTicket] = useState<supportType | null>(
    null,
  );

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
          <button className="h-9 rounded-md bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
            Filter
          </button>
          <button className="h-9 rounded-md border border-blue-700 px-5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
            Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-black">
            Support
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[18%]" />
              <col className="w-[14%]" />
              <col className="w-[22%]" />
              <col className="w-[16%]" />
            </colgroup>

            <thead>
              <tr className="border-b border-gray-200">
                {[
                  "სახელი",
                  "იმეილი",
                  "სტატუსი",
                  "გამოგზავნილია",
                  "მოქმედება",
                ].map((h) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400 ${
                      h === "მოქმედება" ? "text-right pr-7" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {database.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-50 last:border-0"
                >
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.user_name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.user_email}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${item.resolved ? "text-green/500/10 bg-green-500" : "text-red-500 bg-red-500/10"}`}
                    >
                      {item.resolved ? "შესრულებულია" : "არ არის შესრულებული"}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-gray-500">
                    {formatDate(item.created_at)}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedTicket(item)}
                        className="flex h-7 items-center justify-center rounded-md border border-gray-200 px-3 text-xs font-semibold text-gray-600 transition-colors hover:border-blue-500 hover:text-blue-500 cursor-pointer "
                      >
                        გახსნა
                      </button>
                      <button 
                      onClick={() => deleteSupportMsg(item.id)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-400 transition-colors hover:border-orange-500 cursor-pointer hover:text-orange-500">
                        <X size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTicket && (
        <>
          <div
            className="inset-0 fixed h-full w-full bg-black/40 z-10"
            onClick={() => setSelectedTicket(null)}
          />
          <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  შეტყობინება
                </h2>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer "
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">სახელი</p>
                  <p className="text-gray-800 font-medium">
                    {selectedTicket.user_name}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">იმეილი</p>
                  <p className="text-gray-800">{selectedTicket.user_email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">შეტყობინება</p>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-3 leading-relaxed">
                    {selectedTicket.user_message}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">გამოგზავნილია</p>
                  <p className="text-gray-500">
                    {formatDate(selectedTicket.created_at)}
                  </p>
                </div>
                <div>
                  <button
                    onClick={async () => {
                      await resolveTicket(selectedTicket.id);
                      setSelectedTicket(null);
                    }}
                    disabled={selectedTicket.resolved}
                    className={`w-full h-9 rounded-lg text-sm cursor-pointer  font-semibold transition-colors ${
                      selectedTicket.resolved
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    {selectedTicket.resolved
                      ? "უკვე შესრულებულია"
                      : "შესრულებულად მონიშვნა"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
