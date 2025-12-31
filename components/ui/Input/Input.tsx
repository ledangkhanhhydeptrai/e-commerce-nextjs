"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "outlined" | "flushed";
  inputSize?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error = null,
      helperText = "",
      leftIcon,
      rightIcon,
      variant = "outlined",
      inputSize = "md",
      fullWidth = false,
      className = "",
      disabled,
      required,
      value,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const isFloating = isFocused || Boolean(value);

    /* ===== Size ===== */
    const sizeClasses = {
      sm: "px-3 pt-4 pb-2 text-sm",
      md: "px-4 pt-5 pb-2 text-base",
      lg: "px-5 pt-6 pb-3 text-lg"
    };

    /* ===== Variant ===== */
    const variantClasses = {
      default:
        "border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500",
      filled:
        "border-0 rounded-lg bg-gray-100 focus:bg-gray-200 focus:ring-2 focus:ring-purple-500",
      outlined:
        "border-2 border-gray-300 rounded-lg bg-white focus:border-purple-500",
      flushed:
        "border-0 border-b-2 border-gray-300 rounded-none bg-white focus:border-purple-500"
    };

    const errorClasses = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "";

    const disabledClasses = disabled
      ? "opacity-50 cursor-not-allowed bg-gray-50"
      : "";

    return (
      <div className={fullWidth ? "w-full" : "w-auto"}>
        <div className="relative">
          {/* ===== Floating Label ===== */}
          <label
            className={`
              absolute left-3 z-10 transition-all pointer-events-none
              ${
                isFloating
                  ? "-top-2 text-xs px-1 bg-white rounded-sm"
                  : "top-1/2 -translate-y-1/2 text-sm"
              }
              ${
                error
                  ? "text-red-600"
                  : isFocused
                  ? "text-purple-600"
                  : "text-gray-500"
              }
            `}
          >
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>

          {/* ===== Left Icon ===== */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* ===== Input ===== */}
          <input
            ref={ref}
            value={value}
            className={`
              w-full
              text-gray-900 placeholder:text-gray-400
              ${sizeClasses[inputSize]}
              ${variantClasses[variant]}
              ${errorClasses}
              ${disabledClasses}
              ${leftIcon ? "pl-10" : ""}
              ${rightIcon ? "pr-10" : ""}
              transition-all duration-200
              focus:outline-none
              ${className}
            `}
            disabled={disabled}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* ===== Right Icon ===== */}
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {rightIcon}
            </div>
          )}
        </div>

        {/* ===== Error / Helper ===== */}
        {(error || helperText) && (
          <div className="mt-1.5">
            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : (
              <p className="text-sm text-gray-500">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
