import { GetStaticPropsContext } from "next";
import { GameData } from "../components/interfaces";
import { useState } from "react";
import fs from "fs";
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import button from "../styles/buttons.module.scss";

const ITEMS_PER_PAGE = 24;
const PAGE_RANGE_DISPLAY = 5;

export async function getStaticProps(context: GetStaticPropsContext) {
  const userData = await fs.promises.readFile("dados.json", "utf-8");
  const data = JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function IndexPage({ data }: { data: GameData[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(
      currentPage - Math.floor(PAGE_RANGE_DISPLAY / 2),
      1
    );
    let endPage = Math.min(startPage + PAGE_RANGE_DISPLAY - 1, totalPages);

    if (endPage - startPage + 1 < PAGE_RANGE_DISPLAY) {
      startPage = Math.max(endPage - PAGE_RANGE_DISPLAY + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <Navbar />
      <div className="py-20 bg-black">
        <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {pageData.map((element) => {
              return <Card data={element} key={element.name} />;
            })}
          </div>
        </div>
        <div className="flex align-center justify-center pt-5">
          <div className="flex">
            {getPageNumbers().map((pageNumber, index) => (
              <button
                style={{ margin: "5px" }}
                key={index}
                onClick={() => handlePageChange(pageNumber)}
                className={`${
                  pageNumber === currentPage
                    ? button.selectedButton
                    : button.primaryButton
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
