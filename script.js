const inputField = document.querySelector("#input-field");
const outputField = document.querySelector("#output-field");

const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const capitalize = document.querySelector(".capitalize");

const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");


inputField.addEventListener("input", () => {
    if (inputField.value === "") {
        outputField.textContent = "Output";
    } else {
        outputField.textContent = inputField.value;
    }
});


uppercase.addEventListener("click", () => {
  outputField.textContent = inputField.value.toUpperCase();
});


lowercase.addEventListener("click", () => {
  outputField.textContent = inputField.value.toLowerCase();
});


capitalize.addEventListener("click", () => {
  outputField.textContent = inputField.value
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
});


bold.addEventListener("click", () => {
  outputField.style.fontWeight =
    outputField.style.fontWeight === "bold" ? "normal" : "bold";
});


italic.addEventListener("click", () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === "italic" ? "normal" : "italic";
});


underline.addEventListener("click", () => {
  outputField.style.textDecoration =
    outputField.style.textDecoration === "underline" ? "none" : "underline";
});