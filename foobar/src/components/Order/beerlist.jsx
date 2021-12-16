import Beerlistitem from "./beerlistitem";

 export default function Beerlist(props) {
  const beerArr = props.data.map((product, index) => <Beerlistitem countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} {...product} key={index} />);
  return (
    <div className="Home">
      <main>
        <section className="beerlist-wrapper">{beerArr}</section>
      </main>
    </div>
  );
}
