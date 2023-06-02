const IconPack = require("../public/icons/Icons");
const Icons = new IconPack();
export default function LoginSigninHeader() {
    return(
        <nav className="flex justify-between items-center px-24 py-4 w-full bg-breta-blue z-50">
        <div>
          <Icons.MonochromaticLogo/>
        </div>
        <div className="flex gap-8 text-white font-light tracking-wide text-md">
          <div>Conocer Más</div>
          <div>Paquetes</div>
        </div>
      </nav>
    )
};
