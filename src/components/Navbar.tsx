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
      <div className="flex-1">
        {/* logo for desktop */}
        <Image
          src={"/logo/gz.svg"}
          width={50}
          height={50}
          alt="..."
          className="ml-5 hidden md:block"
        ></Image>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className={text.linkTXT}>Home</a>
          </li>
          <li>
            <a className={text.linkTXT}>Games</a>
          </li>
          <li>
            <details>
              <summary className={text.linkTXT}>Filters</summary>
              <ul
                className={`${covers.filters} dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}
              >
                <li>
                  <a className={text.linkTXT}>Link 1</a>
                </li>
                <li>
                  <a className={text.linkTXT}>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
