"use client";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading: boolean;
  variant: "primary" | "secondary" | "danger";
  fullWidth: boolean;
}
export default function Button({
  children,
  loading = false,
  variant = "primary",
  fullWidth = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const baseClass =
    "px-4 py-2 rounded font-medium transition disabled:opacity-60 disabled:cursor-not-allowed";
  const variantClass =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : variant === "secondary"
        ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
        : "bg-red-600 text-white hover:bg-red-700";
  const widthClass = fullWidth ? "w-full" : "";
  const finalClass = `${baseClass} ${variantClass} ${widthClass} ${className}`;
  return (
    <button className={finalClass} disabled={disabled || loading} {...props}>
      {loading ? "Loading..." : children}
    </button>
  );
}
