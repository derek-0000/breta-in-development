"use client";
import { useRef } from "react";
import { signIn } from "@/services/login";
import Image from "next/image";
import MonochromaticLogo from "@/public/icons/logo";

export default function Home() {
  const passwordField = useRef<string>("");
  const emailField = useRef<string>("");
  const usernameField = useRef<string>("");

  return (
    <>
      <div className="h-[100vh] overflow-hidden">
        <nav className="fixed top-0 flex p-4 w-full bg-cyan-700 z-50">
          <div>
          </div>
          <div>
            Test
          </div>
        </nav>
          <main className="flex flex-col absolute right-0 justify-right items-center w-2/5 p-24 bg-gray-100 z-10 h-full">
            <div className="text-cyan-700 font-bold text-2xl my-4">
              Bienvenido de vuelta a BRETA
            </div>
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={() => signIn(usernameField.current,emailField.current,passwordField.current)}
            >
              <div>
                <label
                  className="block text-sm font-semibold leading-6 text-cyan-700 font-light"
                  htmlFor="password"
                >
                  Username
                </label>
                <input
                  onChange={(e) => (usernameField.current = e.target.value)}
                  type="password"
                  name="password"
                  id=""
                  className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-gray-100 focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  className="text-cyan-700 block text-sm font-semibold leading-6 text-cyan-700 font-light"
                  htmlFor="email"
                >
                  Correo Electronico
                </label>
                <input
                  onChange={(e) => (passwordField.current = e.target.value)}
                  type="email"
                  name="email"
                  id=""
                  className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-gray-100 focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold leading-6 text-cyan-700 font-light"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  onChange={(e) => (emailField.current = e.target.value)}
                  type="password"
                  name="password"
                  id=""
                  className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-gray-100 focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="text-sm ring-1 ring-gray-300 bg-cyan-700 rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm text-gray-100"
              >
                Iniciar Sesion
              </button>
            </form>
            <div className="flex flex-col items-center gap-4 my-4 w-full">
              <div className="text-cyan-700 font-light">
                Tambien puedes crear una <a className="font-bold">Nueva cuenta</a>
              </div>
              <div className="text-cyan-700 font-light">
                O puedes iniciar sesion con:
              </div>
              <button
                type="submit"
                className="w-full text-sm ring-1 ring-red-300 text-red-300 rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm"
              >
                Google
              </button>
              <button
                type="submit"
                className="w-full text-sm ring-1 ring-blue-300 text-blue-300  rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm"
              >
                Facebook
              </button>
            </div>
          </main>
        <div className="flex aspect-[4/3] -z-50">
          <div className=" absolute w-full h-full">
            <Image
              fill
              src="/images/dyeing-hair-in-hairdressing-salon-2021-08-26-15-43-19-utc 1.png"
              alt="asian-young-asian"
              className="-z-10"
            />
          </div>
          <div className=" absolute w-full h-full">
            <Image
              fill
              src="/images/asian-young-asian-woman-setting-open-sign-at-the-s-2022-12-16-03-21-34-utc 1.png"
              alt="asian-young-asian"
              className="-z-10"
            />
          </div>
          <div className=" absolute w-full h-full">
            <Image
              fill
              src="/images/hairdresser-checking-her-schedule-2022-04-27-01-52-24-utc 1.png"
              alt="asian-young-asian"
              className="-z-10"
            />
          </div>
          <div className=" absolute w-full h-full">
            <Image
              fill
              src="/images/see-you-soon-cropped-shot-of-a-handsome-young-bar-2023-01-04-20-37-56-utc 1.png"
              alt="asian-young-asian"
              className="-z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
