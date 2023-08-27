//Modulos
import Image from "next/image";
//CSS
import cards from "../Cards/cards.module.scss";

const Prices = () => {
  return (
    <div className={`${cards.bgpriceCard} center`}>
      <div
        className={`${cards.pricecard} ${cards.borderCard} bg-black grid grid-cols-5 place-items-center`}
      >
        <div className="grid grid-rows-2 hidden md:block">
          <Image
            src={"/logo/gz.svg"}
            width={50}
            height={50}
            alt="..."
            className=""
          ></Image>
          <p className={"text-center"}>gz</p>
        </div>

        <div className="md:col-span-2 col-span-3 grid grid-rows-2">
          <p className={`${cards.cardtext}`}>title</p>
          <div className={`grid grid-cols-2 place-items-center`}>
            <p>storeName</p>
            <p>storeLastUdt</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <p className={`${cards.cardtext}`}>1000</p>
          <p>10%</p>
        </div>

        <p className="text-left">comprar</p>
      </div>
    </div>
  );
};

export default Prices;
