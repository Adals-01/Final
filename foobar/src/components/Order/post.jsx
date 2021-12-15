
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