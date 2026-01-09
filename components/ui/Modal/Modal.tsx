"use client";
import React from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import Button from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  type: "default" | "success" | "error" | "warning" | "info";
  showCloseButton: boolean;
  closeOnOverlayClick: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  type = "default",
  showCloseButton = true,
  closeOnOverlayClick = true
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl"
  };

  const typeConfig = {
    default: {
      color: "bg-gradient-to-r from-blue-600 to-indigo-600",
      icon: Info,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    success: {
      color: "bg-gradient-to-r from-green-600 to-emerald-600",
      icon: CheckCircle,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    error: {
      color: "bg-gradient-to-r from-red-600 to-rose-600",
      icon: AlertCircle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    warning: {
      color: "bg-gradient-to-r from-yellow-600 to-orange-600",
      icon: AlertTriangle,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    info: {
      color: "bg-gradient-to-r from-cyan-600 to-blue-600",
      icon: Info,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    }
  };

  const config = typeConfig[type];
  const IconComponent = config.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className={`relative ${sizeClasses[size]} w-full animate-slideUp`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          {title && (
            <div
              className={`${config.color} px-8 py-6 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${config.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <IconComponent className={`w-6 h-6 ${config.iconColor}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{title}</h2>
                </div>

                {showCloseButton && (
                  <Button
                    fullWidth
                    loading={false}
                    variant="primary"
                    onClick={onClose}
                    className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:rotate-90 group"
                  >
                    <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Body */}
          <div>{children}</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};
export default Modal;
