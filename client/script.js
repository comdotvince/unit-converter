if (window.location.pathname.endsWith("lengthConverter.html")) {
  console.log("You are on lengthConverter.html");
  localStorage.setItem("category", "length");
} else if (window.location.pathname.endsWith("weightConverter.html")) {
  console.log("You are on weightConverter.html");
  localStorage.setItem("category", "weight");
} else if (window.location.pathname.endsWith("temperatureConverter.html")) {
  console.log("You are on temperatureConverter.html");
  localStorage.setItem("category", "temperature");
}

// input elements
const valueInput = document.getElementById("value");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const convertBtn = document.getElementById("convertBtn");

let value = ""; // Default value
let from = ""; // Default from unit
let to = ""; // Default to unit

valueInput?.addEventListener("input", () => {
  value = valueInput.value;
  console.log(value);
  localStorage.setItem("value", value);
});

fromInput?.addEventListener("input", () => {
  from = fromInput.value;
  console.log(from);
  localStorage.setItem("from", from);
});

toInput?.addEventListener("input", () => {
  to = toInput.value;
  console.log(to);
  localStorage.setItem("to", to);
});

const pathname = window.location.pathname;

convertBtn?.addEventListener("click", async () => {
  localStorage.setItem("pathname", pathname);
  window.location.href = "result.html";
});
