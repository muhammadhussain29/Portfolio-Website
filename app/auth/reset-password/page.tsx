"use client";

import { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

      <h1 className="text-2xl font-bold text-primary text-center">
        Reset Password
      </h1>

      <p className="text-sm text-gray-500 text-center mt-1">
        Enter your new password to reset your password
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 mt-8"
        >
          <TextInput
            name="password"
            type="password"
            placeholder="Enter new password"
            label="New Password"
            required
          />

          <TextInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            label="Confirm Password"
            required
          />

          <button
            type="submit"
            className="bg-primary text-white rounded-full py-3 font-medium hover:opacity-90 transition cursor-pointer mt-5"
          >
            Update Password
          </button>
        </form>
      ) : (
        <div className="mt-8 text-center">
          <p className="text-green-600 bg-green-600/20 px-4 py-2 rounded-lg border border-green-200 text-sm font-medium">
            ✅ Password successfully reset! You can now login with your new password.
          </p>

          <Link
            href="/auth/login"
            className="text-primary text-sm hover:underline mt-4 flex items-center justify-center gap-2 cursor-pointer"
          >
            Go to Login
            <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {!submitted && (
        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-primary hover:underline flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>
      )}

    </div>
  );
}
