// types/jwt.ts
export interface JwtPayload {
  sub: string;        // username
  exp: number;
  iat: number;
}
