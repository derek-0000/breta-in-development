"use client";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninForm from "@/components/LoginSigninForm";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <LoginSigninHeader />

        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-2/3 h-full  bg-breta-gray">
            <LoginSignInCarousel />
          </div>
          <LoginSigninForm />
        </div>
      </div>
    </>
  );
}
