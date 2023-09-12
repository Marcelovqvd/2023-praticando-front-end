const form = document.querySelector("form");
const button = document.querySelector("button");

function handleSend(response) {
  if (response.ok) {
    form.classList.add("enviado");
  } else {
    form.innerHTML = "<p>Não deu </p>";
    form.classList.add("enviado");
  }
}

function handlesubmit(event) {
  event.preventDefault();
  button.disabled = true;
  button.innerText = "Enviando...";
}

form.addEventListener("submit", handlesubmit);
