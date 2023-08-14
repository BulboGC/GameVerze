import { GetStaticPropsContext } from "next";
import { GameData } from "../components/interfaces";
import { useState } from "react";
import fs from "fs";
import "../styles/globals.css";
import "../../public/fonts/fonts.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

//pegar as infos do json
export async function getStaticProps(context: GetStaticPropsContext) {
  const userData = await fs.promises.readFile("dados.json", "utf-8");
  const data = JSON.parse(userData);

  return {
    props: { data },
  };
}

export default function IndexPage({ data }: { data: GameData[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredGames = data
    .filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((game) => !selectedGenre || game.genre.includes(selectedGenre));

  const sortedGames = [...filteredGames].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const genres = Array.from(new Set(data.flatMap((game) => game.genre)));

  return (
    <>
      {/* --------------------------------- Navbar --------------------------------- */}
      <Navbar />
      {/* --------------------------------- Filtros --------------------------------- */}
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                setSelectedGenre(selectedGenre === genre ? null : genre)
              }
            >
              {genre}
            </button>
          ))}
        </div>
        {/* --------------------------------- GameGrid --------------------------------- */}
        <div className="py-20 bg-black">
          <div className="flex align-center justify-center my-10 mx-0 md:mx-10 lg:mx-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
              {sortedGames.map((game) => (
                <Card data={game} key={game.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- Navbar --------------------------------- */}
      <Footer />
    </>
  );
}
