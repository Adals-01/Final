import Beerlistitem from "./beerlistitem";

 export default function Beerlist(props) {
   console.log(props.dashboard + "hello")
  const beerArr = props.data.map((product, index) => <Beerlistitem countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} {...product} key={index} taps={props.dashboard.taps} />);
  return (
    <div className="Home">
      <main>
        <section className="beerlist-wrapper">{beerArr}</section>
      </main>
    </div>
  );
}
