// features/auth/hooks/useAuthRedirect.ts
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthRedirect(isLoggedIn: boolean) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn, router]);
}
