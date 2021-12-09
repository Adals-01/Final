import elhefe from "../../assets/elhefe.png";
import fairytaleale from "../../assets/fairytaleale.png";
import githop from "../../assets/githop.png";
import hollabacklager from "../../assets/hollaback.png";
import hoppilyeverafter from "../../assets/hoppilyeverafter.png";
import mowintime from "../../assets/mowintime.png";
import row26 from "../../assets/row26.png";
import ruinedchildhood from "../../assets/ruinedchildhood.png";
import sleighride from "../../assets/sleighride.png";
import steampunk from "../../assets/steampunk.png";

const images = {
  elhefe,
  fairytaleale,
  githop,
  hollabacklager,
  hoppilyeverafter,
  mowintime,
  row26,
  ruinedchildhood,
  sleighride,
  steampunk,
};
function getImageByKey(key) {
  return images[key];
}

export default function Beerlistitem(props) {
  const beer = props.name;
  const alc = props.alc;
  console.log(props);
  console.log(alc);
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  let price = alc.toString().split(".").join("");

  console.log(price);
  return (
    <div className="beerListItem">
      <div className="leftSide">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      </div>
      <div className="rightSide">
        <h3>{props.name}</h3>
        <p>{props.description.overallImpression}</p>
        <p>{props.alc}% alc</p>
        {(() => {
          if (price.length === 1) {
            return <p>{price}0 DKK</p>;
          } else {
            return <p>{price} DKK</p>;
          }
        })()}
      </div>
    </div>
  );
}
