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
  return (
    <div className="tap-item">
      <h2>{props.id + 1}</h2>
      <img className="beer-label" src={getImageByKey(beerimg)} alt={beerimg} />
      <h3>{/* {props.beer} */}</h3>
      <div className="tap-levels-container">
        <div className="bar-fluid"
          style={{
            height: "1rem",
            width: `calc(${props.level}rem/2500*7)`,
            backgroundColor: "white",
            border: "1px solid white",
            borderRadius: "0.5rem",
            "@media (maxWidth: 992px)": {
              width: `calc(${props.capacity}rem/2500*14)`,
            }
          }}
        ></div>
        <div className="bar-container"
          style={{
            height: "1rem",
            width: `calc(${props.capacity}rem/2500*7)`,
            border: "1px solid white",
            borderRadius: "0.5rem",
            "@media (maxWidth: 992px)": {
              width: `calc(${props.capacity}rem/2500*14)`,
            }
          }}
        ></div>
      </div>
    </div>
  );
}
