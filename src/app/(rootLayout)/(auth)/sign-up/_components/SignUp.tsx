"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { UserResponse } from "@/types/user-types";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onClick = async (data: RegisterFormValues) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: UserResponse = await res.json();

      if (result.success) {
        alert("Registration successful! Now login.");
        router.push(`/login?callbackUrl=${callbackUrl}`);
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      alert(message);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">
            This is a mock registration page for demonstration purposes.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onClick)} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password", { required: "Password is required" })}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button disabled={isSubmitting} className="w-full">
              Register
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
