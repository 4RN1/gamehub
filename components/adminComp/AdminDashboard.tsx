"use client"

import { formatDate } from "@/lib/formatDate";

 
type NewsItem = {
  id: number;
  title: string;
  category: string;
  created_at: string;
};
 
type SupportMessage = {
  id: number;
  user_name: string;
  user_message: string;
  resolved: boolean;
  created_at: string;
};
 
type AdminDashboardProps = {
  newsCount: number;
  ad?: string;
  supportCount: number;
  resolvedMsgCount: number;
  recentNews?: NewsItem[];
  recentMessages?: SupportMessage[];
};
 
 

 
const QUICK_LINKS = [
  { label: "სიახლის დამატება", sub: "Add news", href: "/dashboard/add-news", iconBg: "bg-blue-200", iconColor: "text-blue-700", icon: "+" },
  { label: "სიახლეების სია", sub: "News list", href: "/dashboard/news-list", iconBg: "bg-green-200", iconColor: "text-green-700", icon: "≡" },
  { label: "შეტყობინებები", sub: "Support", href: "/dashboard/support", iconBg: "bg-red-100", iconColor: "text-red-700", icon: "✉" },
];
 


export default function AdminDashboard({
  newsCount,
  ad = "150₾",
  supportCount,
  resolvedMsgCount,
  recentNews ,
  recentMessages,
}: AdminDashboardProps) {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-800 p-6 flex flex-col gap-5">
 
      {/* Stats */}
      <div className="bg-white border  border-gray-200 shadow-sm rounded-xl p-5">
        <h2 className="text-gray-800 text-xl font-medium mb-4">სტატისტიკა</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
 
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1 border border-zinc-300">
            <div className="w-8 h-8 rounded-lg bg-blue-200 flex items-center justify-center mb-1">
              <span className="text-blue-700 text-sm">📰</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">{newsCount}</span>
            <span className="text-sm text-gray-500">სულ სიახლეები</span>
          </div>
 
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1 border border-zinc-300">
            <div className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center mb-1">
              <span className="text-amber-700 text-sm">₾</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">{ad}</span>
            <span className="text-sm text-gray-500">დონაციები / რეკლამები</span>
            <span className="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full w-fit mt-1">საცდელი</span>
          </div>
 
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1 border border-zinc-300">
            <div className="w-8 h-8 rounded-lg bg-red-200 flex items-center justify-center mb-1">
              <span className="text-red-700 text-sm">💬</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">{supportCount}</span>
            <span className="text-sm text-gray-500">სულ შეტყობინებები</span>
          </div>
 
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1 border border-zinc-300">
            <div className="w-8 h-8 rounded-lg bg-green-200 flex items-center justify-center mb-1">
              <span className="text-green-700 text-sm">✓</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">{resolvedMsgCount}</span>
            <span className="text-sm text-gray-500">სულ გადაჭრილი პრობლემები</span>
          </div>
 
        </div>
      </div>
 
      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          <div className="bg-white border border-gray-200 col-span-1 shadow-sm rounded-xl overflow-hidden  max-w-90">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
            <span className="text-gray-400 text-sm">⚡</span>
            <h3 className="text-sm font-medium text-gray-800">სწრაფი ლინკები</h3>
          </div>
          <div>
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-5 py-5 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${link.iconBg}`}>
                  <span className={`text-sm font-medium ${link.iconColor}`}>{link.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{link.label}</p>
                  <p className="text-[11px] text-gray-400">{link.sub}</p>
                </div>
                <span className="text-gray-300 text-sm">→</span>
              </a>
            ))}
          </div>
        </div>
 
        {/* Recent news */}
        <div className="bg-white border col-span-2 border-gray-200 shadow-sm rounded-xl f">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
            <span className="text-gray-400 text-sm">🕐</span>
            <h3 className="text-sm font-medium text-gray-800">ბოლო სიახლეები</h3>
          </div>
          <div className="overflow-y-scroll h-90">
            {recentNews?.slice(0, 10).map((item) => {
            
              return (
                <div key={item.id} className="flex items-start gap-3 px-5 py-3 border-b border-gray-50 last:border-b-0 ">
                  <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center shrink-0 text-gray-400 text-xs">
                    🎮
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">{item.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[12px] text-gray-600">{formatDate(item.created_at)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* Recent messages */}
        <div className="bg-white border col-span-2 border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2">
            <span className="text-gray-400 text-sm">✉</span>
            <h3 className="text-sm font-medium text-gray-800">ბოლო შეტყობინებები</h3>
          </div>
          <div>
            {recentMessages?.slice(0, 8).map((msg) => (
              <div key={msg.id} className="px-5 py-3 border-b border-gray-50 last:border-b-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${msg.resolved === true ? "bg-green-500" : " bg-red-400"}`} />
                    <span className="text-sm font-medium text-gray-800">{msg.user_name}</span>
                  </div>
                  <span className="text-[11px] text-gray-400"></span>
                </div>
                <p className="text-xs text-gray-700 truncate pl-4">{msg.user_message}</p>
                <span className="text-[11px] text-gray-400">{formatDate(msg.created_at)}</span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Quick links */}
      
 
      </div>
    </div>
  );
}
