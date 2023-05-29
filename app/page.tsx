"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const loginUrl = "";
  const passwordField = useRef<string>("");
  const emailField = useRef<string>("");

  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className=""> Wellcome to Breta </div>
      <Link href="/login" className="w-full text-sm ring-1 ring-blue-300 text-blue-300  rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm">Login</Link>
      <Link href="/signin" className="w-full text-sm ring-1 ring-blue-300 text-blue-300  rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm">Signin</Link>
    </div>
    </>
  );
}
