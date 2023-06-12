"use client";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninForm from "@/components/LoginSigninForm";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <LoginSigninHeader />
        <div className="relative flex flex-col flex-1">
          <div className="w-full md:3/5 lg:w-4/5 h-full">
            <LoginSignInCarousel />
          </div>
          <LoginSigninForm />
        </div>
      </div>
    </>
  );
}
