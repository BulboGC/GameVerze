import { GetStaticPropsContext } from "next";
import { GameData } from "../components/interfaces";

import "../styles/globals.css";
import "../../public/fonts/fonts.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";

import fs from "fs";

export async function getStaticProps(context: GetStaticPropsContext) {
  const userData = await fs.promises.readFile("fav.json", "utf-8");
  const data = await JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function index({ data }: { data: GameData[] }) {
  return (
    <div className="pt-20 bg-black">
      <Navbar />
      <Header />
      <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {data.map((element): JSX.Element => {
            return <Card data={element} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
