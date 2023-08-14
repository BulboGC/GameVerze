//propers
import Image from "next/image";
//styles
import text from "../styles/text.module.scss";
import covers from "../styles/covers.module.scss";
import navbar from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <div
      className={`${navbar.backNav} sticky top-0 z-50 navbar backdrop-blur-xl bg-white/50`}
    >
      <a className="flex-1">
        {/* logo for desktop */}
        <Image
          src={"/logo/gz.svg"}
          width={50}
          height={50}
          alt="..."
          className="ml-5 hidden md:block"
        ></Image>
      </a>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className={text.linkTXT} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={text.linkTXT} href="/games">
              Games
            </a>
          </li>
          <li className="mr-5">
            <a className={text.linkTXT} href="/games">
              Filters
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
