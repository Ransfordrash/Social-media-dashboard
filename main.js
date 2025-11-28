const bodyEl = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");
let lightMode = localStorage.getItem("lightMode");

console.log(lightMode);

const enableLightMode = () => {
  bodyEl.classList.add("light-mode");
  localStorage.setItem("lightMode", "enabled");
};
const disableLightMode = () => {
  bodyEl.classList.remove("light-mode");
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enableLightMode();
}

function themeToggle() {
  lightMode = localStorage.getItem("lightMode")
  if (lightMode !== "enabled") {
    enableLightMode();
    console.log(lightMode);
  } else {
    disableLightMode();
    console.log(lightMode);
  }
}

toggleBtn.addEventListener("click", themeToggle);
