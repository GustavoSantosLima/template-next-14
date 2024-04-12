"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: Session["user"];
};

export function UserInfo({ user }: UserInfoProps) {
  if (!user) return;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar>
        <AvatarFallback>{user.name?.[0]?.toUpperCase() ?? "U"}</AvatarFallback>
      </Avatar>
      <span>{user.email}</span>

      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
