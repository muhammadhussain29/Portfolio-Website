"use client";

import TextInput from "@/components/ui/TextInput";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
    router.push("/dashboard");
  };

  return (
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-primary text-center">
          Admin Login
        </h1>

        <p className="text-sm text-gray-500 text-center mt-1">
          Enter your email and password to login
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 mt-8"
        >
          <TextInput
            name="email"
            placeholder="Enter your email"
            type="email"
            label="Email"
            icon={<Mail />}
            required
          />

          <TextInput
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            required
          />

          <Link
            href="/auth/forgot-password"
            className="text-sm text-primary hover:underline text-right cursor-pointer"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="bg-primary text-white rounded-full py-3 font-medium hover:opacity-90 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
  );
}
