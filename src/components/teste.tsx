import React from "react";
import { GameData } from "../components/interfaces";

const jsonData: GameData[] = require("../components/dados.json");

interface CardProps {
  item: GameData;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="card">
      <h2>{item.name}</h2>
      <p>Platform: {item.Plataforma}</p>
    </div>
  );
};

const Teste = () => {
  return (
    <div className="container">
      {jsonData.map((item: GameData, index: number) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Teste;
