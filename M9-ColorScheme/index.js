const colorSchemeEl = document.querySelector(".color-section");
const colorsBtn = document.querySelector(".get-color-btn");

const getColorSchemeData = async () => {
  const colorValueEl = document.querySelector("#colorpicker").value.slice(1, 7);
  const colorMode = document.querySelector("#colorscheme").value.toLowerCase();
  const url = `https://www.thecolorapi.com/scheme?hex=${colorValueEl}&mode=${colorMode}&count=5`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.colors.map(color => color.hex.value);
  } catch (error) {
    console.log(error);
  }
};

const renderColors = async () => {
  const colorsArr = await getColorSchemeData();
  const colorsHtml = colorsArr.map(color => `
    <div class="color-box" style="background-color: ${color}">
      <div class="color-value">${color}</div>
    </div>
  `).join("");
  colorSchemeEl.innerHTML = colorsHtml;
};

colorSchemeEl.addEventListener("click", e => {
    const colorValue = e.target.textContent;
    console.log(`Copied ${colorValue} to clipboard`);
    navigator.clipboard.writeText(colorValue);
});

window.addEventListener("load", renderColors);
colorsBtn.addEventListener("click", renderColors);