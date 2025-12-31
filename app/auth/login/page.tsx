// app/login/page.tsx
import LoginContainer from "@/features/auth/login/LoginContainer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginContainer />
    </div>
  );
}
