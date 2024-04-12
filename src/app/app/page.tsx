import { auth } from "@/services/auth";
import { UserInfo } from "./_components/user-info";

export default async function Page() {
  const session = await auth();

  return (
    <main className="h-screen flex items-center justify-center">
      <UserInfo user={session?.user} />
    </main>
  );
}
