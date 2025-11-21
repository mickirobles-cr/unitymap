function toggleForm() {
  document.getElementById("formBox").classList.toggle("hidden");
}

function addMarker() {
  const pinsContainer = document.getElementById("pins");

  const pin = document.createElement("div");
  pin.className = "pin";

  // posición random de prueba
  pin.style.left = (Math.random() * 80 + 10) + "%";
  pin.style.top = (Math.random() * 80 + 10) + "%";

  pinsContainer.appendChild(pin);

  toggleForm();
}
