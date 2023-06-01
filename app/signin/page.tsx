"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function SigninPage() {
  const passwordField = useRef<string>("");
  const emailField = useRef<string>("");
  const usernameField = useRef<string>("");
  const router = useRouter();

}
