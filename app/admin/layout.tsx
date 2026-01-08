"use client";
import React, { useState } from "react";
import { User, Package, Settings, LogOut, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    icon: <User className="w-5 h-5" />,
    label: "Quản lý người dùng",
    path: "/admin/user"
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Quản lý sản phẩm",
    path: "/evm/admin/products"
  }
];

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-full bg-linear-to-b from-indigo-600 via-indigo-700 to-indigo-900 
        text-white shadow-2xl z-50 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "w-72" : "w-20"}`}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-center border-b border-white/10 bg-black/10">
          {isSidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-indigo-600 font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Admin</h1>
                <p className="text-xs text-indigo-200">Admin System</p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-indigo-600 font-bold text-xl">E</span>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <div
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`cursor-pointer flex items-center gap-4 px-4 py-3.5 rounded-xl 
        transition-all duration-200 group relative overflow-hidden
        ${
          isActive
            ? "bg-white text-indigo-700 shadow-lg scale-105"
            : "hover:bg-white/10 hover:translate-x-1"
        }
        ${!isSidebarOpen && "justify-center"}
        `}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-r"></div>
                )}

                <span className={isActive ? "text-indigo-600" : "text-white"}>
                  {item.icon}
                </span>

                {isSidebarOpen && (
                  <>
                    <span className="font-medium flex-1">{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/10">
          {isSidebarOpen ? (
            <div className="space-y-2">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
              hover:bg-white/10 transition-all duration-200 group"
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Cài đặt</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
                bg-red-500/20 hover:bg-red-500 transition-all duration-200 group"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Đăng xuất</span>
              </button>
            </div>
          ) : (
            <div className="space-y-2 flex flex-col items-center">
              <button
                type="button"
                title="Cài đặt"
                className="p-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                type="button"
                title="Đăng xuất"
                onClick={handleLogout}
                className="p-3 rounded-xl bg-red-500/20 hover:bg-red-500 transition-all"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 right-0 h-20 bg-white/90 backdrop-blur-xl
        flex items-center justify-between px-6 shadow-lg border-b border-slate-200/50 z-40
        transition-all duration-300 ${isSidebarOpen ? "left-72" : "left-20"}`}
      >
        {/* Left: Toggle & Search */}
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main
        className={`pt-20 min-h-screen transition-all duration-300 
        ${isSidebarOpen ? "ml-72" : "ml-20"}`}
      >
        <div className="">{children}</div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
