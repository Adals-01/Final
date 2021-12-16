const url = "https://keasem2-551e.restdb.io/rest/foobar";

export function push(email) {
  const payload = { email };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-apikey": "606defeaf592f7113340ed01" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("The email has been posted");
      console.log(data);
    });
}

// fetch("https://keasem2-551e.restdb.io/rest/ezone", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//     "x-apikey": "606defeaf592f7113340ed01",
//     "cache-control": "no-cache",
//   },
//   body: postData,
// })
//   .then((res) => {
//     console.log(res);
//     document.querySelector("input[type=submit]").disabled = false;
//     form.elements.email.value = "";
//     /*       document.querySelector(".popup p").classList.remove("hidden"); */
//     document.querySelector(".yay").classList.remove("hidden");
//   })

//   .then((response) => {
//     console.log(response);
//   });
