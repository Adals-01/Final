import Beerlistitem from "./beerlistitem";

export default function Beerlist(props) {
  console.log(props.dashboard.taps);
  const beerArr = props.data.map((product, index) => <Beerlistitem countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} {...product} key={index} dashboard={props.dashboard.storage} taps={props.dashboard.taps} />);
  return (
    <div className="Home">
      <main>
        <section className="beerlist-wrapper">{beerArr}</section>
      </main>
    </div>
  );
}
