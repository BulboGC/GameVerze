import "../../../styles/globals.css";
import "../../../../public/fonts/fonts.css";

import Navbar from "../../../components/Navs/Navbar";
import Footer from "../../../components/Navs/Footer";
import Prices from "../../../components/Cards/Prices";
import Banner from "../../../components/Banners/Banner";
import CardGame from "../../../components/Cards/CardGame";
import { GetStaticPaths } from "next/types";
import { GetStaticProps } from "next";
import upperPrice from "../../../components/Interfaces/IQupperPrice";
import axios, { AxiosResponse } from "axios";

interface DynamicParams {
  [key: string]: string | string[];
}

export const getStaticPaths: GetStaticPaths<DynamicParams> = async () => {
  const response: AxiosResponse<upperPrice[]> = await axios.get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
  );
  const arr = response.data;
  const paths = arr.map((id) => ({
    params: { id: id.dealID },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<any, DynamicParams> = async ({
  params,
}) => {
  if (!params) {
    throw new Error("Missing params");
  }

  const id = params.id;

  return {
    props: {
      id,
      // Outros dados obtidos com base no ID
    },
  };
};

export default function index({ id }: DynamicParams) {
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
