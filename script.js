const inputField = document.querySelector("#input-field");
const outputField = document.querySelector("#output-field");

const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const capitalize = document.querySelector(".capitalize");

const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");

const clear = document.querySelector(".clear");
const copy = document.querySelector(".copy");

const reset = document.querySelector(".reset");
const download = document.querySelector(".download");

const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', function () {

  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeBtn.innerText = '☀️ Light Mode';
  } else {
    themeBtn.innerText = '🌙 Dark Mode';
  }

});

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


clear.addEventListener("click", () => {
  inputField.value = "";
  outputField.textContent = "Output";

  outputField.style.fontWeight = "normal";
  outputField.style.fontStyle = "normal";
  outputField.style.textDecoration = "none";
});


copy.addEventListener("click", async () => {
  const text = outputField.textContent;

  const html = `
    <span style="
      font-weight: ${outputField.style.fontWeight};
      font-style: ${outputField.style.fontStyle};
      text-decoration: ${outputField.style.textDecoration};
    ">${text}</span>
  `;

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([text], {
          type: "text/plain"
        }),
        "text/html": new Blob([html], {
          type: "text/html"
        })
      })
    ]);

    alert("Formatted text copied!");
  } catch (error) {
    console.error("Copy failed:", error);
  }
});

reset.addEventListener("click", () => {
  outputField.textContent = inputField.value;
  outputField.style.fontWeight = "normal";
  outputField.style.fontStyle = "normal";
  outputField.style.textDecoration = "none";
});

download.addEventListener("click", () => {
  const text = outputField.outerHTML;
  const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Formatted Text</title>
</head>
<body>
  <p>${text}</p>
</body>
</html>
`;

  const file = new Blob([content], {
    type: "text/html"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "formatted-text.html";
  link.click();
  URL.revokeObjectURL(link.href);
});