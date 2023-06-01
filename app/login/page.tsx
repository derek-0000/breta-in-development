"use client";
import LoginSigninForm from "@/components/LoginSigninForm";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function LoginPage() {




  return (
    <>
    <div>
    </div>
      <LoginSigninHeader />
      <div className="flex h-full">
        <div className="w-2/3 h-full">
          <LoginSignInCarousel />
        </div>
        <aside className="flex flex-col bg-white justify-right items-center w-1/3 p-12 z-10 h-full">
          <LoginSigninForm />
        </aside>
      </div>
    </>
  );
}
