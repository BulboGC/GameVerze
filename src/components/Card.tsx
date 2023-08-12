import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";
import { GameData } from "../components/interfaces";

const jsonData: GameData[] = require("../components/dados.json");

export default function Card(props): JSX.Element {
  const nome = dados.name;

  return (
    <div className={covers.card}>
      <div className="card w-full h-full bg-base-100 shadow-xl image-full">
        <figure>
          <img
            className="rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className={text.cardTXT}>{nome}</h2>
        </div>
      </div>
    </div>
  );
}
