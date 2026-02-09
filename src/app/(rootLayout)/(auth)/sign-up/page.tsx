import { Suspense } from "react";
import SignUp from "./_components/SignUp";

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SignUp />
    </Suspense>
  );
};

export default RegisterPage;
