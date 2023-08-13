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
  const userData = await fs.promises.readFile("dados.json", "utf-8");
  const data = await JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function index({ data }: { data: GameData[] }) {
  return (
    <div className="bg-black">
      <Navbar />
      <Header />
      <div className="flex align-center justify-center my-10 mr-3 md:mr-0">
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10">
          {/*{data.map((element): JSX.Element => {
            return <Card data={element} />;
          })}*/}
        </div>
      </div>
      <Footer />
    </div>
  );
}
