"use client";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const IconPack = require("../public/icons/Icons");
const Icons = new IconPack();
export default function LoginSigninForm() {
  const usernameField = useRef<string>("");
  const emailField = useRef<string>("");
  const cellphoneField = useRef<string>("");
  const passwordField = useRef<string>("");
  const passwordConfirm = useRef<string>("");
  const gender = useRef<string>("");
  const dateOfBirth = useRef<string>("");

  const [passwordVisibilityRef, setpasswordVisibilityRef] =
    useState<string>("password");
  const [formState, setFormState] = useState<string>("login");
  const [errors, setErrors] = useState<string[]>([]);
  const [hiddenStatus, setHiddenStatus] = useState<boolean>(false);
  const [signinStatus, setSigninStatus] = useState<number>(0);
  const router = useRouter();

  const headers = {
    "content-type": "application/json",
  };

  const renderErrors = (errors: any) => {
    return errors.map(() => {
      return <div className=" text-breta-orange font-sm mt-2">{errors}</div>;
    });
  };

  const passwordVisibilityHandler = () => {
    passwordVisibilityRef == "password"
      ? setpasswordVisibilityRef("text")
      : setpasswordVisibilityRef("password");
  };

  const SignIn = async (
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
    gender: string,
    dateOfBirth: string,
    cellphoneField: string
  ) => {
    if (
      username == "" ||
      email == "" ||
      passwordConfirm == "" ||
      passwordConfirm == "" ||
      !gender ||
      !dateOfBirth ||
      cellphoneField == ""
    ) {
      setErrors([]);
      return setErrors((errors) => [
        ...errors,
        "Porfavor, complete con toda su información",
      ]);
    } else if (password != passwordConfirm) {
      setErrors([]);
      return setErrors((errors) => [...errors, "Las contraseñas no coinciden"]);
    }
    const URL: string = "https://breta-api.up.railway.app/graphql";
    const graphqlQuerry: string = `mutation{
      createUser(createUserInput: {
        username: "${username}"
        full_name: "${username}"
        email: "${password}"
        password: "${password}"
        gender: "${gender}"
        cellphone: "${cellphoneField}"
        birthday: "${dateOfBirth}"
      }){
        user_id
        username
        email
      }
    }`;
    console.log(graphqlQuerry);
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ query: graphqlQuerry }),
    };

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      const result = data.data;
      console.log(graphqlQuerry);
      if (result != null) {
        router.push("/login");
      } else if (result == null) {
        setErrors([]);
        setErrors((errors) => [
          ...errors,
          data.errors[0].extensions.originalError.message,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async (email: string, password: string) => {
    if (password == "" || email == "") {
      setErrors([]);
      setErrors((errors) => [...errors, "Porfavor llene todos los campos"]);
    } else {
      const URL: string = "https://breta-api.up.railway.app/graphql";
      const graphqlQuerry: string = `mutation{
            login(loginUserInput:{
                email: "${email}"
                password: "${password}"
            }){
                access_token
                user{ 
                    username
                    email
                }
            }
        }`;
      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ query: graphqlQuerry }),
      };
      try {
        const response = await fetch(URL, options);
        const data = await response.json();
        const result = data.data;
        if (result != null) {
          localStorage.setItem("token", data.data.login.access_token);
          router.push("/user");
        } else {
          setErrors([]);
          setErrors((errors) => [
            ...errors,
            data.errors[0].extensions.originalError.message,
          ]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const formVisibilityHandler = () => {
    hiddenStatus == true ? setHiddenStatus(false) : setHiddenStatus(true);
  };

  return (
    <>
      {hiddenStatus == false && (
        <aside className="absolute rounded-t-2xl h-4/5 bottom-0 flex flex-col bg-white  w-full md:h-full md:relative md:w-1/3 z-10 md:rounded-l-2xl">
          <div className="relative flex flex-col justify-center items-center p-4 h-full w-full md:p-4 lg:p-6">
            <button
              className="absolute top-10 right-10 pointer md:hidden"
              onClick={() => formVisibilityHandler()}
            >
              X
            </button>
            <div className="text-breta-blue font-bold text-2xl my-4 text-center tracking-wider select-none ">
              {formState == "signin"
                ? "Dinos quién eres"
                : "Bienvenido a BRETA"}
            </div>
            <div className="flex flex-col gap-4 w-full">
              {formState == "signin" && (
                <>
                  {signinStatus == 0 && (
                    <>
                      <div>
                        <label
                          className="relative text-breta-blue block text-sm font-semibold leading-6 select-none"
                          htmlFor="username"
                        >
                          Nombre Completo
                          <div className="absolute left-3 top-8">
                            <Icons.UserIcon />
                          </div>
                          <span className="w-20 h-1 mx-2 bg-breta-blue z-50"></span>
                        </label>
                        <input
                          required
                          onChange={(e) => {
                            usernameField.current = e.target.value;
                          }}
                          type="text"
                          name="username"
                          className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
                          placeholder="Ingresa tu nombre"
                        ></input>
                      </div>
                      <div>
                        <label
                          className="relative block text-sm  leading-6 text-breta-blue font-medium w-full"
                          htmlFor="celphoneField"
                        >
                          Número de celular
                          <div className="absolute left-3 top-8">
                            {/* <Icons.PhoneIcon /> */}
                          </div>
                        </label>
                        <input
                          onChange={(e) =>
                            (cellphoneField.current = e.target.value)
                          }
                          name="celphoneField"
                          className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
                          placeholder="Número de celular"
                        />
                      </div>
                      <div>
                        <label
                          className="relative block text-sm  leading-6 text-breta-blue font-medium w-full"
                          htmlFor="celphoneField"
                        >
                          Fecha de Nacimiento
                        </label>
                        <input
                          onChange={(e) =>
                            (dateOfBirth.current = e.target.value)
                          }
                          type="date"
                          name="celphoneField"
                          className="w-full px-2 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 text-gray-500  "
                          placeholder="Número de celular"
                        />
                      </div>
                      <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                          <input
                            onChange={() => (gender.current = "male")}
                            type="radio"
                            id="hosting-small"
                            name="hosting"
                            value="hosting-small"
                            className="hidden peer"
                            required
                          />
                          <label
                            htmlFor="hosting-small"
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400"
                          >
                            <div className="block">
                              <Icons.ManIcon />

                              <div className="w-full text-lg font-semibold">
                                Hombre
                              </div>
                            </div>
                          </label>
                        </li>
                        <li>
                          <input
                            onChange={() => (gender.current = "female")}
                            type="radio"
                            id="hosting-big"
                            name="hosting"
                            value="hosting-big"
                            className="hidden peer"
                          />
                          <label
                            htmlFor="hosting-big"
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400"
                          >
                            <div className="block">
                              <Icons.WomanIcon />

                              <div className="w-full text-lg font-semibold">
                                Mujer
                              </div>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </>
                  )}
                  {signinStatus == 1 && (
                    <>
                      <div>
                        <label
                          className="relative text-breta-blue block text-sm font-semibold leading-6 select-none"
                          htmlFor="email"
                        >
                          Correo Electronico
                          <div className="absolute left-3 top-8">
                            <Icons.IconEmail />
                          </div>
                          <span className="w-20 h-1 mx-2 bg-breta-blue z-50"></span>
                        </label>
                        <input
                          required
                          onChange={(e) =>
                            (emailField.current = e.target.value)
                          }
                          type="email"
                          name="email"
                          className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
                          placeholder="Ingresa tu correo electrónico"
                        ></input>
                      </div>
                      <div>
                        <label
                          className="relative block text-sm font-semibold leading-6 text-breta-blue select-none"
                          htmlFor="password"
                        >
                          Contraseña
                          <div className="absolute left-3 top-8">
                            <Icons.IconPassword />
                          </div>
                          <div
                            onClick={() => passwordVisibilityHandler()}
                            className={"absolute right-3 top-9 cursor-pointer"}
                          >
                            <Icons.PasswordVisibility />
                          </div>
                        </label>
                        <input
                          required
                          onChange={(e) =>
                            (passwordField.current = e.target.value)
                          }
                          type={passwordVisibilityRef}
                          name="password"
                          className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                          placeholder="Mayor a 8 caracteres"
                        />
                      </div>
                      <div>
                        <label
                          className="relative block text-sm  leading-6 text-breta-blue font-medium w-full"
                          htmlFor="celphoneField"
                        >
                          Confirmar Contraseña
                          <div className="absolute left-3 top-8">
                            <Icons.IconPassword />
                          </div>
                          <div
                            onClick={() => passwordVisibilityHandler()}
                            className="absolute right-3 top-9 cursor-pointer"
                          >
                            <Icons.PasswordVisibility />
                          </div>
                        </label>
                        <input
                          onChange={(e) =>
                            (passwordConfirm.current = e.target.value)
                          }
                          type={passwordVisibilityRef}
                          name="passwordConfirm"
                          className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
                          placeholder="Vuelve a escribir tu contraseña"
                        />
                      </div>
                    </>
                  )}
                  {signinStatus == 0 ? (
                    <>
                      <button
                        onClick={() => setSigninStatus(1)}
                        className="self-end w-1/3 bg-breta-blue p-2 text-white rounded-md"
                      >
                        Siguiente
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setSigninStatus(0)}
                        className="self-end w-1/3 bg-breta-blue p-2 text-white rounded-md"
                      >
                        Anterior
                      </button>
                    </>
                  )}
                </>
              )}
              {formState == "login" && (
                <>
                  <div>
                    <label
                      className="relative text-breta-blue block text-sm font-semibold leading-6 select-none"
                      htmlFor="email"
                    >
                      Correo Electronico
                      <div className="absolute left-3 top-8">
                        <Icons.IconEmail />
                      </div>
                      <span className="w-20 h-1 mx-2 bg-breta-blue z-50"></span>
                    </label>
                    <input
                      required
                      onChange={(e) => (emailField.current = e.target.value)}
                      type="email"
                      name="email"
                      className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
                      placeholder="Ingresa tu correo electrónico"
                    ></input>
                  </div>
                  <div>
                    <label
                      className="relative block text-sm font-semibold leading-6 text-breta-blue select-none"
                      htmlFor="password"
                    >
                      Contraseña
                      <div className="absolute left-3 top-8">
                        <Icons.IconPassword />
                      </div>
                      <div
                        onClick={() => passwordVisibilityHandler()}
                        className={"absolute right-3 top-9 cursor-pointer"}
                      >
                        <Icons.PasswordVisibility />
                      </div>
                    </label>
                    <input
                      required
                      onChange={(e) => (passwordField.current = e.target.value)}
                      type={passwordVisibilityRef}
                      name="password"
                      className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500"
                      placeholder="Mayor a 8 caracteres"
                    />
                  </div>
                </>
              )}

              {formState == "login" ? (
                <button
                  type="button"
                  onClick={(e) =>
                    Login(emailField.current, passwordField.current)
                  }
                  className="text-sm py-5 ring-1 tracking-wide font-bold ring-gray-300 bg-breta-blue hover:bg-breta-dark-blue rounded-md px-6 focus:outline-0 placeholder:text-sm text-gray-100"
                >
                  Iniciar Sesión
                </button>
              ) : (
                <button
                  type="button"
                  onClick={(e) =>
                    SignIn(
                      usernameField.current,
                      emailField.current,
                      passwordField.current,
                      passwordConfirm.current,
                      dateOfBirth.current,
                      gender.current,
                      cellphoneField.current
                    )
                  }
                  className="text-sm py-5 ring-1 tracking-wide font-bold ring-gray-300 bg-breta-blue hover:bg-breta-dark-blue rounded-md px-6 focus:outline-0 placeholder:text-sm text-gray-100"
                >
                  Crear Cuenta
                </button>
              )}
            </div>
            <div className="flex flex-col">
              {errors && renderErrors(errors)}
            </div>
            <div className="flex flex-col items-center gap-4 my-4 w-full">
              {formState == "login" ? (
                <div>
                  <div className="mb-2 text-breta-blue font-light select-none">
                    Tambien puedes crear una{" "}
                    <a
                      className="font-bold cursor-pointer"
                      onClick={() => setFormState("signin")}
                    >
                      Nueva cuenta
                    </a>
                  </div>
                  <div className="mb-2 relative px-12 text-breta-blue text-center text-xs font-light select-none after:absolute after:h-px after:w-1/4 after:bg-breta-blue after:-left-5 after:bottom-2 before:absolute before:h-px before:w-1/4 before:bg-breta-blue before:-right-5 before:bottom-2">
                    O puedes iniciar sesion con:
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-2 text-breta-blue font-light select-none">
                    Si ya tienes una cuenta{" "}
                    <a
                      className="font-bold cursor-pointer"
                      onClick={() => setFormState("login")}
                    >
                      Inicia Sesión
                    </a>
                  </div>
                  <div className="mb-2 relative px-12 text-breta-blue text-center text-xs font-light select-none after:absolute after:h-px after:w-1/4 after:bg-breta-blue after:-left-5 after:bottom-2 before:absolute before:h-px before:w-1/4 before:bg-breta-blue before:-right-5 before:bottom-2">
                    O crea cuenta con:
                  </div>
                </div>
              )}
              {/* Add signin/login logic with google/facebook */}
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
      )}
      {hiddenStatus == true && (
        <aside className="absolute rounded-t-2xl bottom-0 flex flex-col bg-transparent w-full md:h-full md:relative md:w-1/3 z-10 md:rounded-l-2xl">
          <div className="flex flex-col gap-4 items-center justify-center p-8">
            <button
              onClick={() => {
                setHiddenStatus(false);
                setFormState("signin");
              }}
              className="w-full text-sm py-5 ring-1 tracking-wide font-bold ring-gray-300 bg-breta-blue hover:bg-breta-dark-blue rounded-md px-6 focus:outline-0 placeholder:text-sm text-gray-100"
            >
              ¡Crear mi Cuenta!
            </button>
            <div className="">
              ¿Ya tienes cuenta?{" "}
              <span
                onClick={() => {
                  setHiddenStatus(false);
                  setFormState("login");
                }}
                className="font-bold"
              >
                Inicia Sesión.
              </span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
