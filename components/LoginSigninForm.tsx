import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
const IconPack = require('../public/icons/Icons')
const Icons = new IconPack
export default function LoginSigninForm() {
  const passwordField = useRef<string>("");
  const emailField = useRef<string>("");
  const passwordConfirm = useRef<string>("");

  const [passwordVisibilityRef, setpasswordVisibilityRef] =
    useState<string>("password");
  const [formState, setFormState] = useState<string>("login");
  const [loginError, setLoginError] = useState<string>("");
  const [signinError, setSigninError] = useState<string>("");

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
  const Login = async (email: string, password: string) => {
    if (password == "" || email == "") {
      return setLoginError("Por favor, llene ambos campos");
    }
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
      if (data.data.login) {
        localStorage.setItem("token", data.data.login.access_token);
        router.push("/user");
      } else {
        setLoginError(data.errors[0].message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const passwordVisibilityHandler = () => {
    passwordVisibilityRef == "password"
      ? setpasswordVisibilityRef("text")
      : setpasswordVisibilityRef("password");
  };

  return (
    <div className="flex flex-col justify-center h-full w-full">
      <div className="text-breta-blue font-bold text-2xl my-4 text-center tracking-wider select-none ">
        {formState == "signin" ? "Bienvenido de vuelta a BRETA" : "Bienvenido a BRETA"}
      </div>
      <form className="flex flex-col gap-8 w-full">
        <div>
          <label
            className="relative text-breta-blue block text-sm font-semibold leading-6 select-none"
            htmlFor="email"
          >
            Correo Electrónico
            <div className="absolute left-3 top-8">
              <Icons.IconEmail />
            </div>
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
        {formState == "signin" && (
          <div>
            <label
              className="relative text-sm  leading-6 text-breta-blue font-medium"
              htmlFor="passwordConfirm"
            >
              Confirmar Contraseña
              <div className="absolute left-3 top-8">
                <Icons.IconEmail />
              </div>
            </label>
            <input
              onChange={(e) => (passwordConfirm.current = e.target.value)}
              type="text"
              name="passwordConfirm"
              className="w-full px-10 text-sm ring-1 ring-gray-300 rounded-md p-2 bg-breta-light-gray focus:outline-0 placeholder:text-sm placeholder:text-gray-500 "
              placeholder="Vuelve a escribir tu contraseña"
            />
          </div>
        )}
        {loginError && (
          <div className=" text-breta-orange text-sm">{loginError}</div>
        )}
        {signinError && (
          <div className=" text-breta-orange text-sm">{signinError}</div>
        )}
        {formState == "login" ? (
          <button
            type="button"
            onClick={(e) => Login(emailField.current, passwordField.current)}
            className="text-sm py-5 ring-1 tracking-wide font-bold ring-gray-300 bg-breta-blue hover:bg-breta-dark-blue rounded-md px-6 focus:outline-0 placeholder:text-sm text-gray-100"
          >
            Iniciar Sesión
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) =>
              SignIn(
                passwordConfirm.current,
                emailField.current,
                passwordField.current
              )
            }
            className="text-sm py-5 ring-1 tracking-wide font-bold ring-gray-300 bg-breta-blue hover:bg-breta-dark-blue rounded-md px-6 focus:outline-0 placeholder:text-sm text-gray-100"
          >
            Crear Cuenta
          </button>
        )}
      </form>
      <div className="flex flex-col items-center gap-4 my-4 w-full">
        {formState == "login" ? (
          <div>
            <div className="text-breta-blue font-light select-none">
              Tambien puedes crear una{" "}
              <a
                className="font-bold cursor-pointer"
                onClick={() => setFormState("signin")}
              >
                Nueva cuenta
              </a>
            </div>
            <div className="relative px-12 text-breta-blue text-center text-xs font-light select-none after:absolute after:h-px after:w-1/4 after:bg-breta-blue after:-left-5 after:bottom-2 before:absolute before:h-px before:w-1/4 before:bg-breta-blue before:-right-5 before:bottom-2">
              O puedes iniciar sesion con:
            </div>
          </div>
        ) : (
          <div>
            <div className="text-breta-blue font-light select-none">
              Si ya tienes una cuenta{" "}
              <a
                className="font-bold cursor-pointer"
                onClick={() => setFormState("login")}
              >
                Inicia Sesión
              </a>
            </div>
            <div className="relative px-12 text-breta-blue text-center text-xs font-light select-none after:absolute after:h-px after:w-1/4 after:bg-breta-blue after:-left-5 after:bottom-2 before:absolute before:h-px before:w-1/4 before:bg-breta-blue before:-right-5 before:bottom-2">
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
  );
}
