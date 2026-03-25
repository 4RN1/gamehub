import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // if not logged in, redirect to login
  if (!session) {
    redirect("/admin/login");
  }

  // if logged in but not admin, redirect to home
//   if (session.user.role !== "admin") {
//     redirect("/");
//   }

  return (
    <div>
      {/* optional: admin sidebar/navbar here later */}
      <main>{children}</main>
    </div>
  );
}