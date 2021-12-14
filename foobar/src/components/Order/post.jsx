
const url = "https://foobar-team10.herokuapp.com/order";


export function post(data) {
  const postData = JSON.stringify(data);
  console.log("data"+ postData)
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json",},
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("The order has been posted");
      console.log(data);
    });
}

/* function postOrder() {fetch("https://los-amigos.herokuapp.com/order",
 {method: "POST",headers: { "Content-Type": "application/json",},
  body: JSON.stringify(props.payload),})
  .then((response) => {
       const obj = response.json();
        // window.alert(obj.Object.id);        return obj;      })      .then((data) => {        props.addID({ id: data.id, customer: props.customerName });        props.resetBasket();        props.setIsModalYourID(true);        props.setShowResults(false);      })      .catch((err) => {        console.error(err);      });  }
  })}
 */