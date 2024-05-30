import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runHomePage = () => {
  resetPage();
  makeHTML();
  makeHeader();
};

const makeHTML = () => {
  const main = document.querySelector("main");
  const pageContainer = document.createElement("div");
  pageContainer.className =
    "flex justify-center items-center frontPageImg width-100 height-100";

  const welcomeTextContainer = document.createElement("section");
  welcomeTextContainer.className =
    "welcomeTextContainer shadow bg-white flex flex-col items-center";

  const welcome = document.createElement("h1");
  welcome.innerText = "Welcome";
  welcome.className = "font-60 font-comic";

  const textOne = document.createElement("p");
  textOne.className = "font-30 text-left m-t-30 mx-50 font-comic";
  textOne.innerText =
    "My name is Laura Lei, i’m a front end developer based in Bergen, Norway. ";

  const textTwo = document.createElement("p");
  textTwo.className = "font-30 text-left m-t-30 mx-50 font-comic";
  textTwo.innerText =
    "Although I have been coding for less than a year, I am a quick learner with a genuine love for this field. Here, you'll find a showcase of my projects and skills as I continue to grow and evolve in this exciting journey. ";

  const textThree = document.createElement("p");
  textThree.className = "font-30 text-left m-t-30 mx-50 font-comic";
  textThree.innerText =
    "Thank you for visiting my portfolio, and I hope you enjoy exploring my work as much as I enjoy creating it!";

  main.appendChild(pageContainer);
  pageContainer.appendChild(welcomeTextContainer);
  welcomeTextContainer.append(welcome, textOne, textTwo, textThree);
};
