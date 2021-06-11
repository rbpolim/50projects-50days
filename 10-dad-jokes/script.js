const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// === USING ASYNC/AWAIT === //
async function generateJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();

  jokeEl.innerHTML = data.joke;
}

// === USING .THEN() === //
// function generateJoke() {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
