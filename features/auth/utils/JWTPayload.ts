// utils/jwt.ts
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types/jwt";

export function getUsernameFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode<JwtPayload>(token);

    // sub (subject) trong JWT = username do backend (Spring Security) tạo
    // Nếu token không có sub hoặc sub rỗng → trả về null
    return decoded.sub ? decoded.sub : null;
  } catch (error) {
    console.error("Error:", error);
    // Token không hợp lệ / decode lỗi
    return null;
  }
}
