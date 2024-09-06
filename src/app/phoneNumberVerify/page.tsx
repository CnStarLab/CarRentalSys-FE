import VerificationCodeInputClient from "@/components/phoneNumber/phoneNumberClient";
import Loading from "@/components/loading";
import React, { Suspense } from "react";

export default function VerificationCodeInput() {
  return (
    <Suspense fallback={<Loading/>}>
      <VerificationCodeInputClient />
    </Suspense>
  );
}
