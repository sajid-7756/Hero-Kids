import { SessionPayload } from "@/lib/auth";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoutBtn from "@/app/(rootLayout)/profile/_components/LogoutBtn";

const AuthButtons = ({ session }: { session: SessionPayload | null }) => {
  if (!session)
    return (
      <div>
        <Button size="sm" asChild>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    );

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Hi, {session.name}</span>
      <LogoutBtn variant="default" />
    </div>
  );
};

export default AuthButtons;
