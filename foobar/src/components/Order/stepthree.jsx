
import leaf1 from "../../assets/illustrations/leaf1.svg";

export default function StepThree(props)
 {
    return (
        <div className="form-container step-three">
        <h2>Thank you for ordering!</h2>
        <p>The bartenders have been notified, and your drinks will be ready soon.</p>
        <button>WANT MORE SIPS?</button>
        <img className="left" src={leaf1} alt={"hop leaf"} />
        </div>
     )
 }
