"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async data => {
    try {
      await signIn("email", { email: data.email, redirect: false });

      toast({
        title: "Check your email",
        description: "We sent a magic link to your email address"
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: "Please try again later"
      });
    }
  });

  return (
    <Card className="mx-auto max-w-sm my-8">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              type="email"
              placeholder="m@example.com"
              {...form.register("email")}
            />
          </div>
          <Button className="w-full">Send magic link</Button>
        </form>
      </CardContent>
    </Card>
  );
}
