import keg from "../assets/keg-icon.svg";

export default function StorageItem(props) {
  return (
    <div className="storage-item">
      
      <div className="slanted-text-container">
        <h3>{props.name}</h3>
      </div>
      <div className="keg-container">
        <img className="keg-icon" src={keg} alt={"keg-icon"} />
        <p className="keg-amount">{props.amount}</p>
      </div>
    </div>
  );
}
