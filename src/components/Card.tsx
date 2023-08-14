import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";
import { GameData } from "./interfaces";

type CardProps = {
  data: GameData;
};

const Card = ({ data }: CardProps) => {
  return (
    <div className={`${covers.card}`}>
      <div className="card w-full h-full text-focus-in shadow-xl image-full">
        <figure>
          <img
            className="rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/slides/017.webp"
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className={text.cardTXT}>{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
