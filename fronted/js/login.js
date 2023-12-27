document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  let data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  fetch("http://localhost:8090/user/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
});
