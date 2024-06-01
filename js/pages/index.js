import { resetPage } from "../components/resetPage.mjs";

export const runHomePage = () => {
  resetPage();
  makeHTML();
};

const makeHTML = () => {
  const main = document.querySelector("main");

  const logo = document.createElement("img");
  logo.src = "public/logo/logo1.png";
  logo.alt = "Lei Dev Logo";

  const text = document.createElement("h1");
  text.innerText = "Welcome!";

  const textTwo = document.createElement("p");
  textTwo.innerText =
    "I am still building this website! Come back again later!";
  main.append(logo, text, textTwo);
};
