"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoginSignInCarousel from "@/components/LoginSignInCarousel";
import LoginSigninHeader from "@/components/LoginSigninHeader";

export default function SigninPage() {
  const passwordField = useRef<string>("");
  const emailField = useRef<string>("");
  const usernameField = useRef<string>("");
  const [signinError, setSigninError] = useState("");
  const router = useRouter();

  const SignIn = async (username: string, email: string, password: string) => {
    if (password == "" || email == "" || username == "") {
      return setSigninError("Por favor, llene ambos campos");
    }
    const URL: string = "https://breta-api.up.railway.app/graphql";
    const graphqlQuerry: string = `mutation{
      createUser(createUserInput: {
        username: "${username}"
        email: "${email}"
        password: "${password}"
      }){
        user_id
        username
        email
      }
    }`;
    const headers = {
      "content-type": "application/json",
    };

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query: graphqlQuerry }),
    };

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      if (response.ok) {
        router.push("/login");
      } else {
        setSigninError(data.errors.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-full flex overflow-hidden">
        <LoginSigninHeader />
        <LoginSignInCarousel />
        <aside className="flex flex-col bg-white absolute right-0 justify-right items-center w-1/3 p-12 z-10 h-full">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="text-breta-blue font-bold text-2xl my-4 text-center tracking-wide ">
            Bienvenido de vuelta a BRETA
          </div>
          <form className="flex flex-col gap-4 w-full" id="signinForm">
            <div>
              <label
                className="block text-sm  leading-6 text-breta-blue font-medium"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => (usernameField.current = e.target.value)}
                type="text"
                name="username"
                className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-breta-dark-gray"
                placeholder="Username"
              />
            </div>
            <div>
              <label
                className="block text-sm  leading-6 text-breta-blue font-medium"
                htmlFor="email"
              >
                Correo Electronico
              </label>
              <input
                onChange={(e) => (emailField.current = e.target.value)}
                type="email"
                name="email"
                className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-breta-dark-gray"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                className="block text-sm  leading-6 text-breta-blue font-medium"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                onChange={(e) => (passwordField.current = e.target.value)}
                type="password"
                name="password"
                className="w-full text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                placeholder="Password"
              />
            </div>
            {signinError && <div>{signinError}</div>}
            <button
              type="button"
              onClick={(e) =>
                SignIn(
                  usernameField.current,
                  emailField.current,
                  passwordField.current
                )
              }
              className="text-sm ring-1 ring-gray-300 bg-breta-blue rounded-md py-2 px-6 focus:outline-0 placeholder:text-sm text-gray-100"
            >
              Crear Cuenta
            </button>
          </form>
          <div className="flex flex-col items-center gap-4 my-4 w-full">
            <div className="text-breta-blue font-light">
              O puedes crear una cuenta con:
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
          </div>
        </aside>
      </div>
    </>
  );
}
