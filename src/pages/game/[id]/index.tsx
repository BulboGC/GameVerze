import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";
import cards from "../../../components/Cards/cards.module.scss";

import Navbar from "../../../components/Navs/Navbar";
import Footer from "../../../components/Navs/Footer";
import Prices from "../../../components/Cards/Prices";
import Banner from "../../../components/Banners/Banner";
import CardGame from "../../../components/Cards/CardGame";

export default function index() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "260px" }}>
        <Banner />
      </div>
      <div className="flex justify-center -mt-5 md:block md:mt-5">
        <CardGame />
      </div>
      <div className="px-10 lg:px-15 bg-blacktwo" style={{ zIndex: "10" }}>
        <div className="2xl:pt-28 pt-10 flex flex-col sm:flex-row">
          <div className="flex-auto sm:w-2/5 w-full">infos</div>
          <div className="flex-auto flex-col w-full">
            <Prices />
            <Prices />
            <Prices />
            <Prices />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
