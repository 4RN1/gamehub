import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import AdminSidebar from "@/components/adminComp/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //  const session = await getServerSession();
  const session = true;

  // if not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  // if logged in but not admin, redirect to home
//   if (session.user.role !== "admin") {
//     redirect("/");
//   }

  return (
    <div className="flex">
      {/* optional: admin sidebar/navbar here later */}

      <AdminSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}