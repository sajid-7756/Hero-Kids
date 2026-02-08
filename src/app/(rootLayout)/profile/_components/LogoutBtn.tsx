"use client";
import { Button } from "@/components/ui/button";

type LogOutButtonProps = {
  variant:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
};

const LogoutBtn = ({ variant }: LogOutButtonProps) => {
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const result = await res.json();

      if (res.ok && result.success) {
        window.location.href = "/login";
      } else {
        alert("Logout failed on the server");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      alert(message);
    }
  };
  return (
    <div>
      <Button
        variant={variant ? `${variant}` : "default"}
        onClick={handleLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default LogoutBtn;
