"use client";

import { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

      <h1 className="text-2xl font-bold text-primary text-center">
        Forgot Password
      </h1>

      <p className="text-sm text-gray-500 text-center mt-1">
        Enter your email and we’ll send you a reset link
      </p>

      {!submitted ? (
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

          <button
            type="submit"
            className="bg-primary text-white rounded-full py-3 font-medium hover:opacity-90 transition cursor-pointer mt-5"
          >
            Send Reset Link
          </button>
        </form>
      ) : (
        <div className="mt-8 text-center">
          <p className="text-green-600 bg-green-600/20 px-4 py-2 rounded-lg border border-green-200 text-sm font-medium">
            ✅ Reset link has been sent to your email. Please check your inbox.
          </p>
        </div>
      )}

      {/* Back to Login */}
      <div className="mt-6 text-center">
        <Link
          href="/auth/login"
          className="text-sm text-primary hover:text-primary/90 flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>

    </div>
  );
}
