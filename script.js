const textAnimation = document.getElementById("text-animation");
const texts = [
  "Your Food, Your Way",
  "Na Your Food, E Fit Be Your Style.",
  "ẹ jẹ ounjẹ rẹ, ni irọ rẹ.",
  "Nri gị, N'ihe gị",
  "Tsaunuka Gareku",
];
let index = 0;

function changeText() {
  textAnimation.style.opacity = 0;
  setTimeout(() => {
    textAnimation.innerText = texts[index];
    textAnimation.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 500);
}

setInterval(changeText, 3000);
changeText();

//sticky menu

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY >= 180) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
  console.log(scrollY);
});
