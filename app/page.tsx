"use client";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninForm from "@/components/LoginSigninForm";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        <LoginSigninHeader />

        <div className="flex flex-1">
          <div className="w-2/3 flex-1">
            <LoginSignInCarousel />
          </div>
          <aside className="flex flex-col flex-1 bg-white w-1/3 z-10">
            <LoginSigninForm />
          </aside>
        </div>
      </div>
    </>
  );
}
