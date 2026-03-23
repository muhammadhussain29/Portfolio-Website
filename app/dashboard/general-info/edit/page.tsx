"use client";

import { useState } from "react";
import {
  ArrowRight,
  Upload,
  Save,
} from "lucide-react";

import Breadcrumb from "@/components/ui/BreadCrumb";
import TextInput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";

type EditProfileForm = {
  name: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  experience: string;
};

export default function EditProfilePage() {
  const [form, setForm] = useState<EditProfileForm>({
    name: "Muhammad Hussain",
    role: "Full Stack Developer",
    description:
      "I build scalable, user-focused digital solutions using the modern MERN stack with clean architecture and performance-first mindset.",
    github: "",
    linkedin: "",
    email: "",
    experience: "2",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">
              Edit Profile
            </h1>
            <Breadcrumb className="pt-1" />
          </div>

          <button
            type="submit"
            form="edit-profile-form"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white shadow-sm hover:scale-[1.02] transition"
          >
            Save Changes <Save size={16} /> <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <form
        id="edit-profile-form"
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-6"
      >
        {/* LEFT SIDE */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-300 p-6 md:p-8 lg:col-span-2 space-y-6">
          
          {/* Basic Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <TextInput
              label="Full Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />

            <TextInput
              label="Role"
              name="role"
              type="text"
              value={form.role}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <Textarea
            label="Description"
            name="description"
            placeholder="Write about yourself..."
            onChange={handleChange}
          />

          {/* Links */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Links
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <TextInput
                label="GitHub URL"
                name="github"
                type="text"
                value={form.github}
                onChange={handleChange}
              />

              <TextInput
                label="LinkedIn URL"
                name="linkedin"
                type="text"
                value={form.linkedin}
                onChange={handleChange}
              />

              <TextInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-300 p-6 md:p-8 space-y-6">
          
          {/* Profile Image */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Profile Picture
            </h2>

            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile-without-bg.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <label className="cursor-pointer inline-flex items-center gap-2 text-sm text-primary font-medium">
              <Upload size={16} />
              Upload New Image
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Experience (Years)
            </h2>

            <TextInput
              name="experience"
              type="number"
              placeholder="e.g. 2"
              value={form.experience}
              onChange={handleChange}
            />
          </div>

          {/* Resume */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Resume
            </h2>

            <label className="cursor-pointer inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-4 py-3 font-bold hover:opacity-90 transition">
              Upload Resume
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}