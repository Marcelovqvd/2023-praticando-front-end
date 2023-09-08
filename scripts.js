const form = document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const todo = document.querySelector("input");

const myButton = document.querySelector("button");

function handleSubmit(params) {
  params.preventDefault();
  myButton.classList.add("disabled");
}
