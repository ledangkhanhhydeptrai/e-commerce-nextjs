// features/auth/hooks/useAuthRedirect.ts
"use client";

import { ROLE_ADMIN, ROLE_CUSTOMER } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthRedirectOptions {
  isLoggedIn: boolean;
  role?: typeof ROLE_CUSTOMER | typeof ROLE_ADMIN;
  redirectIfNotLoggedIn: string;
}

export function useAuthRedirect({
  isLoggedIn,
  role,
  redirectIfNotLoggedIn = "/auth/login"
}: AuthRedirectOptions) {
  const router = useRouter();

  useEffect(() => {
    // ❌ Chưa đăng nhập → về login
    if (!isLoggedIn) {
      router.replace(redirectIfNotLoggedIn);
      return;
    }

    // ⛔ Đã login nhưng CHƯA có role → CHỜ
    if (!role) return;

    // ✅ Có role → redirect đúng
    if (role === ROLE_ADMIN) {
      router.replace("/admin");
    } else {
      router.replace("/");
    }
  }, [isLoggedIn, role, redirectIfNotLoggedIn, router]);
}
