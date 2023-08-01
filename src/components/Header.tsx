//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function Header() {
  return (
    <>
      <div className={`${covers.divHeader} flex flex-col text-focus-in`}>
        <div className={`${covers.backgroundImage} grayscale`} />
        <div className={`${covers.gradient} grayscale`} />
        {/*wow creations texto*/}
        <div className={covers.logoBG}>
          <div className="hidden md:block">
            <Image
              src={"/logo/gameverze.svg"}
              width={900}
              height={300}
              alt="gameverze"
            ></Image>
          </div>
        </div>
        <div className={covers.logoBG}>
          <div className="md:hidden">
            <Image
              src={"/logo/gz.svg"}
              width={220}
              height={100}
              alt="gameverze"
            ></Image>
          </div>
        </div>
        {/*texto header para telas BG - MD*/}
        <p className={`${text.smallHDTXT}`}>SEE THE FAVORITES</p>
        <Image
          src={"/icons/seta.svg"}
          width={50}
          height={50}
          alt="gameverze"
          className={`${covers.iconSeta}`}
        ></Image>
      </div>
    </>
  );
}
