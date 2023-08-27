//CSS
import cards from "../Cards/cards.module.scss";
//Interfaces
import upperPrice from "@/components/Interfaces/IQupperPrice";

type propsPrice = {
  data: upperPrice;
};

const Games = ({ data }: propsPrice) => {
  return (
    <div className={`${cards.card} ${cards.borderCard}`}>
      <div className="card w-full h-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://tecdn.b-cdn.net/img/new/slides/017.webp" alt="" />
        </figure>
        <div className="card-body">
          <h2 className={cards.cardTXT}>{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Games;
