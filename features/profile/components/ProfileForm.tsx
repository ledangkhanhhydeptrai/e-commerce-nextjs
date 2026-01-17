"use client";
import Input from "@/components/ui/Input/Input";
import React from "react";
interface ProfileFormProps {
  id: string;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const ProfileForm: React.FC<ProfileFormProps> = ({
  id,
  username,
  setUsername,
  email,
  setEmail,
  onSubmit
}) => {
  const [focusedField, setFocusedField] = React.useState<string | null>(null);

  return (
    <>
      <div className="bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 flex items-center justify-center font-inter">
        {/* Main Container - Fixed Width */}
        <div className="w-full">
          {/* Card */}
          <div className="bg-white overflow-hidden">
            {/* Gradient Header Bar */}
            <div className="h-2 bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-600" />

            {/* Content */}
            <div className="p-8">
              {/* Icon & Title */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-violet-100 to-fuchsia-100 rounded-2xl mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h1 className="font-playfair text-4xl font-bold bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                  Profile Settings
                </h1>
                <p className="text-gray-500 text-sm">
                  Customize your personal information
                </p>
              </div>

              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-5">
                {/* User ID */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    User ID
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={id}
                      className="w-full px-4 py-3 bg-gray-50 text-gray-400 border border-gray-200 rounded-xl outline-none cursor-not-allowed text-sm font-mono"
                      readOnly
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-bold">
                      <span>🔒</span>
                      <span>LOCKED</span>
                    </div>
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label
                    className={`text-xs font-semibold mb-2 uppercase tracking-wide flex items-center gap-1.5 transition-colors ${
                      focusedField === "username"
                        ? "text-purple-600"
                        : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full transition-colors ${
                        focusedField === "username"
                          ? "bg-purple-600"
                          : "bg-gray-400"
                      }`}
                    />
                    Username
                  </label>
                  <div className="relative group">
                    <Input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocusedField("username")}
                      onBlur={() => setFocusedField(null)}
                      className="input-focus-glow w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl outline-none transition-all focus:bg-white focus:border-purple-400"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 opacity-0 group-focus-within:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className={`text-xs font-semibold mb-2 uppercase tracking-wide flex items-center gap-1.5 transition-colors ${
                      focusedField === "email"
                        ? "text-fuchsia-600"
                        : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`w-1 h-1 rounded-full transition-colors ${
                        focusedField === "email"
                          ? "bg-fuchsia-600"
                          : "bg-gray-400"
                      }`}
                    />
                    Email Address
                  </label>
                  <div className="relative group">
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="input-focus-glow w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 border-gray-200 rounded-xl outline-none transition-all focus:bg-white focus:border-fuchsia-400"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-fuchsia-400 opacity-0 group-focus-within:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  aria-label="submit"
                  type="submit"
                  className="relative w-full mt-6 px-6 py-3.5 bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
                >
                  <div className="absolute inset-0 shimmer-button opacity-0 group-hover:opacity-100" />
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Your data is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
