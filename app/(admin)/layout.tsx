import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/adminComp/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin");

  if (!isAdmin) {
    redirect("/login");
  }

  

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}