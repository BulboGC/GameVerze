//styles
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageProps } from "../../.next/types/app/layout";
import { GameData } from "../components/interfaces";
import Card from "./Card";
import axios from "axios";
import { resolve } from "path";

const jsonData: GameData[] = require("../components/dados.json");

export async function getStaticProps() {
  const response = await fetch("/dados.json");
  const data: GameData[] = await response.json();

  return {
    props: { data },
  };
}

export default function About({ data }: { data: GameData[] }): JSX.Element {
  return (
    <div className="flex align-center justify-center my-10 mr-3 md:mr-0">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10">
        {data.map((element, index): JSX.Element => {
          return <Card key={element.name} name={element.name}></Card>;
        })}
      </div>
    </div>
  );
}
