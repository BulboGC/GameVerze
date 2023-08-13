import { GetStaticPropsContext } from "next";
import { GameData } from "../components/interfaces";
import { useEffect, useState } from "react";
import fs from "fs";
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import button from "../styles/buttons.module.scss";

export async function getStaticProps(context: GetStaticPropsContext) {
  const userData = await fs.promises.readFile("dados.json", "utf-8");
  const data = await JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function index({ data }: { data: GameData[] }) {
  const [filteredData, setFilteredData] = useState(data.slice(0, 20));
  const [page, setPage] = useState(1);

  useEffect(() => {
    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;
    const pageData = data.slice(startIndex, endIndex);
    setFilteredData((prevData) => [...prevData, ...pageData]);
  }, [data, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Navbar />
      <div className="py-20 bg-black">
        <div className="flex align-center justify-center my-10 mr-3 md:mr-0">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10">
            {filteredData.map((element) => {
              return <Card data={element} />;
            })}
          </div>
        </div>
        <div className="flex align-center justify-center pt-5">
          <button
            onClick={handleNextPage}
            className={`${button.primaryButton}`}
          >
            See More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
