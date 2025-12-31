// features/auth/hooks/useAuthRedirect.ts
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface UseRegisterRedirectProps {
  loading: boolean;
  success: boolean;
}
export function useAuthRedirectRegister({
  loading,
  success
}: UseRegisterRedirectProps) {
  const router = useRouter();
  useEffect(() => {
    if (!loading && success) router.push("/auth/login");
  }, [loading, success, router]);
}
