//CSS
import cards from "../Cards/cards.module.scss";
//Interfaces
import upperPrice from "@/components/Interfaces/IQupperPrice";

const CardGame = () => {
  return (
    <div className={`${cards.cardGame} ${cards.borderCard}`}>
      <div className="card w-full h-full shadow-xl image-full xl:ml-20">
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="card-body">
          <h2 className={cards.cardTXT}></h2>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
