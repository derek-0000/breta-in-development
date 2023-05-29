import MonochromaticLogo from "@/public/icons/logo"
export default function LoginSigninHeader() {
    return(
        <nav className="flex justify-between items-center fixed top-0 px-24 py-4 w-full bg-breta-blue z-50">
        <div>
          <MonochromaticLogo/>
        </div>
        <div className="flex gap-8 text-white text-xl">
          <div>Conocer mas</div>
          <div>Paquetes</div>
        </div>
      </nav>
    )
};
