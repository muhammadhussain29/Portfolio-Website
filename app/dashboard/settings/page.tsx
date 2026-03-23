"use client";

import TextInput from "@/components/ui/TextInput";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<
    "profile" | "password" | "notifications"
  >("profile");

  return (
    <div className="min-h-screen space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex border-b border-slate-300">
        {[
          { key: "profile", label: "Profile" },
          { key: "password", label: "Password" },
          { key: "notifications", label: "Notifications" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() =>
              setActiveTab(tab.key as "profile" | "password" | "notifications")
            }
            className={`px-6 py-4 text-sm font-medium transition ${
              activeTab === tab.key
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-300">
        {/* Tab Content */}
        <div className="p-8">
          {/* ================= PROFILE TAB ================= */}
          {activeTab === "profile" && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-xl font-semibold text-primary">
                Profile Information
              </h2>

              <div className="grid md:grid-cols-1">
                <TextInput
                  type="text"
                  label="Full Name"
                  required
                  error=""
                  placeholder="Full Name"
                />
                <TextInput
                  type="email"
                  label="Email Address"
                  required
                  error=""
                  placeholder="Email Address"
                />
                <TextInput
                  type="text"
                  label="Phone Number"
                  required
                  error=""
                  placeholder="Phone Number"
                />
              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                Save Changes
              </button>
            </div>
          )}

          {/* ================= PASSWORD TAB ================= */}
          {activeTab === "password" && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-xl font-semibold text-primary">
                Change Password
              </h2>

              <TextInput
                type="password"
                placeholder="Current Password"
                label="Current Password"
                required
                error=""
              />
              <TextInput
                type="password"
                placeholder="New Password"
                label="New Password"
                required
                error=""
              />
              <TextInput
                type="password"
                placeholder="Confirm New Password"
                label="Confirm New Password"
                required
                error=""
              />

              <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                Update Password
              </button>
            </div>
          )}

          {/* ================= NOTIFICATIONS TAB ================= */}
          {activeTab === "notifications" && (
            <div className="space-y-5 max-w-3xl">
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  Notification Preferences
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Control how and when you receive system notifications.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Notifications Switch */}
                <div className="flex items-center justify-between border border-slate-200 rounded-2xl px-6 py-5">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Email Notifications
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Receive important updates and alerts via email.
                    </p>
                  </div>

                  <ToggleSwitch />
                </div>

                {/* Purchase Requests Switch */}
                <div className="flex items-center justify-between border border-slate-200 rounded-2xl px-6 py-5">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      New Purchase Requests
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Get notified whenever a customer submits a purchase
                      request.
                    </p>
                  </div>

                  <ToggleSwitch />
                </div>

                {/* Find Car Requests Switch */}
                <div className="flex items-center justify-between border border-slate-200 rounded-2xl px-6 py-5">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Find My Car Requests
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Receive alerts when users submit a custom vehicle request.
                    </p>
                  </div>

                  <ToggleSwitch />
                </div>

                {/* System Updates Checkbox Group */}
                <div className="border border-slate-200 rounded-2xl px-6 py-5">
                  <h3 className="font-medium text-gray-800">
                    System Update Preferences
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    Select the type of system updates you would like to receive.
                  </p>

                  <div className="space-y-3 text-sm">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="accent-primary w-4 h-4" />
                      Minor Updates & Improvements
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="accent-primary w-4 h-4" />
                      Security Alerts
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="accent-primary w-4 h-4" />
                      New Feature Announcements
                    </label>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-3 rounded-full hover:opacity-90 transition">
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />

      <div
        className="w-11 h-6 bg-gray-300 rounded-full peer 
                      peer-checked:bg-primary 
                      transition-colors duration-300"
      ></div>

      <div
        className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
                      transition-transform duration-300
                      peer-checked:translate-x-5"
      ></div>
    </label>
  );
}
