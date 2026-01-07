import { ROLE_ADMIN, ROLE_CUSTOMER } from "@/constants";

// types/jwt.ts
export interface JwtPayload {
  sub: string; // username
  exp: number;
  role: typeof ROLE_ADMIN | typeof ROLE_CUSTOMER;
  iat: number;
}
export function decodeJwt(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}