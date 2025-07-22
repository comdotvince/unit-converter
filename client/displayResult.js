const resultDiv = document.getElementById("result");

const resetBtn = document.getElementById("resetBtn");

const category = localStorage.getItem("category");
const value = localStorage.getItem("value") || "";
const from = localStorage.getItem("from") || "";
const to = localStorage.getItem("to") || "";
const pathname = localStorage.getItem("pathname");

const url = `http://localhost:3000/api/convert?category=${encodeURIComponent(
  category
)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(
  to
)}&value=${encodeURIComponent(value)}`;

// Wrap the fetch in an async function
async function fetchResult() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    resultDiv.textContent =
      data.result !== undefined
        ? `Result: ${data.result}`
        : `Error: ${data.error}`;
  } catch (error) {
    resultDiv.textContent = "Error connecting to API.";
  }
}

// Call the function when DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  console.log(`Category: ${category}`);
  console.log(`Value: ${value}`);
  console.log(`From: ${from}`);
  console.log(`To: ${to}`);
  console.log(`Pathname: ${pathname}`);

  // Fetch the result after DOM is loaded
  fetchResult();
});

resetBtn.addEventListener("click", () => {
  window.location.href = pathname; // Redirect to the main page
});
