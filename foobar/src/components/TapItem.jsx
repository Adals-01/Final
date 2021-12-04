import elhefe from "../assets/elhefe.png";
import fairytaleale from "../assets/fairytaleale.png";
import githop from "../assets/githop.png";
import hollabacklager from "../assets/hollaback.png";
import hoppilyeverafter from "../assets/hoppilyeverafter.png";
import mowintime from "../assets/mowintime.png";
import row26 from "../assets/row26.png";
import ruinedchildhood from "../assets/ruinedchildhood.png";
import sleighride from "../assets/sleighride.png";
import steampunk from "../assets/steampunk.png";

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

function getImageByKey(key, i) {
  return images[key];
}

export default function TapItem(props) {
  const beer = props.beer;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  console.log(beerimg);
  return (
    <div className="tap-item">
      <img className="beer-label" src={getImageByKey(beerimg)} alt={beerimg} />
      <h3>{/* {props.beer} */}</h3>
      <div className="tap-levels-container">
        <p
          style={{
            height: "1rem",
            width: `calc(${props.level}vw/2500*8)`,
            backgroundColor: "white",
            border: "1px solid white",
            borderRadius: "0.5rem",
          }}
        ></p>
        <p
          style={{
            height: "1rem",
            width: `calc(${props.capacity}vw/2500*8)`,
            border: "1px solid white",
            borderRadius: "0.5rem",
          }}
        ></p>
      </div>
    </div>
  );
}
