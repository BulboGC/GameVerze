import "../styles/globals.css";
import "../../public/fonts/fonts.css";

import { useCallback, useEffect, useState, Suspense } from "react";
import axios, { AxiosResponse } from "axios";
import upperPrice from "../components/Interfaces/IQupperPrice";

import Navbar from "../components/Navs/Navbar";
import Footer from "../components/Navs/Footer";
import Header from "../components/Banners/Header";
import Games from "../components/Cards/Games";
import Link from "next/link";

// Versão correta

export const getStaticProps = async () => {
  const response: AxiosResponse<upperPrice[]> = await axios.get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
  );
  const arr = response.data;
  

  return {props:{arr}};
};

export default function index({arr}:{arr: upperPrice[]}) {


  //fetch dos dados da API

  return (

 
    <Suspense>
      <div className="pt-20 bg-black">
        <Navbar />
        <Header />
       
        <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 place-items-center">
            {arr.map((data, index) => {
              return (
                <Link href={`/game/${data.gameID}`}>
                  <Games key={index} data={data} />
                </Link>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}



// vvvvv Versão de edição vvvvv
/*
import { GetStaticPropsContext } from "next";
import fs from "fs";
import Link from "next/link";

export async function getStaticProps(context: GetStaticPropsContext) {
  const userData = await fs.promises.readFile("JSON_upperprice.json", "utf-8");
  const data = await JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function index({ data }: { data: upperPrice[] }) {
  return (
    <div className="pt-20 bg-black">
      <Navbar />
      <Header />
      <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 place-items-center">
          {data.map((element): JSX.Element => {
            return (
              <Link href={`/game/${element.steamAppID}`}>
                <Games data={element} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
*/
