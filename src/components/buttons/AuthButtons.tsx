"use client";

import { SessionPayload } from "@/lib/auth";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoutBtn from "@/app/(rootLayout)/profile/_components/LogoutBtn";
import { useEffect, useState } from "react";

// const AuthButtons = ({ session }: { session: SessionPayload | null }) => {
const AuthButtons = () => {
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => {
        setSession(data);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

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
