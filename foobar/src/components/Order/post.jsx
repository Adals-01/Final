
const url = "https://foobar-team10.herokuapp/order";
const headers = {
    "x-apikey": "640cad6e-8fb1-480e-a7f1-ac23a9234204",
  /* "Content-Type": "application/json; charset=utf-8", */
  "Content-Type": "application/json"
};

export function post(data) {
  const postData = JSON.stringify(data);
  console.log("data"+ postData)
  fetch(url, {
    method: "POST",
    headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("The order has been posted");
      console.log(data);
    });
}