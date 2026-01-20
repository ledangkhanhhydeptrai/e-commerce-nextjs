"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest, resetRegisterState } from "../store/registerSlice";
import RegisterForm from "../components/RegisterForm";
import { useRouter } from "next/navigation";
import { RegisterFormValues } from "../services/RegisterServices";
import Notification from "@/components/ui/Notification/Notification";

interface NotificationsProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

const RegisterContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, success } = useSelector(
    (state: RootState) => state.register
  );

  const [notification, setNotification] = React.useState<NotificationsProps>({
    open: false,
    message: "",
    severity: "success"
  });

  // ✅ Khi đăng ký THÀNH CÔNG
  React.useEffect(() => {
    if (!success) return;

    setNotification({
      open: true,
      message: "Đăng ký thành công! Đang chuyển trang...",
      severity: "success"
    });

    const timer = setTimeout(() => {
      dispatch(resetRegisterState());
      router.push("/auth/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [success, dispatch, router]);

  // ❌ Khi đăng ký THẤT BẠI
  React.useEffect(() => {
    if (!error) return;

    setNotification({
      open: true,
      message: error,
      severity: "error"
    });
  }, [error]);

  const handleRegister = (values: RegisterFormValues) => {
    // reset notification cũ
    setNotification((prev) => ({ ...prev, open: false }));

    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);

    if (values.fileUrl) {
      formData.append("fileUrl", values.fileUrl);
    }

    dispatch(registerRequest(formData));
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />

      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleCloseNotification}
      />
    </>
  );
};

export default RegisterContainer;
