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
