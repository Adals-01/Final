import leaf1 from "../../assets/illustrations/leaf1.svg";
import leaf2 from "../../assets/illustrations/leaf2.svg";
import { Link } from "react-router-dom";


export default function StepThree() {
  return (
    <div className="form-container step-three">
      <h2>Thank you for ordering!</h2>
      <p>The bartenders have been notified, and your drinks will be ready soon.</p>
      <Link to={"/home"} className="link">
        <button>WANT MORE SIPS?</button> </Link>
      <img className="leaf-img1" src={leaf1} alt={"hop leaf"} />
      <img className="leaf-img2" src={leaf2} alt={"hop leaf"} />
    </div>
  );
}
