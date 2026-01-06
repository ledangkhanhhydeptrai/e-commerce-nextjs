import PaymentReturnPage from "@/features/payment/components/PaymentReturnPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Đang xử lý thanh toán...</p>}>
      <PaymentReturnPage />
    </Suspense>
  );
}
