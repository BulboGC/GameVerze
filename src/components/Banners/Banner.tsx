//propers
import Image from "next/image";
//styles
import banners from "../Banners/banners.module.scss";

export default function Banner() {
  return (
    <>
      {" "}
      <div className={`${banners.divBanner} flex flex-col focus-in`}>
        <div className={`${banners.backgroundImage} grayscale`} />
        <div className={`${banners.gradientBanner} grayscale`} />
      </div>
    </>
  );
}
