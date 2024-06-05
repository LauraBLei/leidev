import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runHomePage = () => {
  resetPage();
  makeHTML();
  makeHeader();
};

const makeHTML = () => {
  const main = document.querySelector("main");

  const sectionOne = document.createElement("section");
  sectionOne.className =
    "relative bg-colorBg flex w-full flex justify-center items-center shadow-regular h-[330px]";

  const overlay = document.createElement("div");
  overlay.className =
    "absolute inset-0 bg-white opacity-50 pointer-events-none";

  const yourVision = document.createElement("h1");
  yourVision.innerText = "Your Vision";
  yourVision.className =
    "font-Karla text-4xl z-10 text-nowrap font-bold hidden lg:block ";

  const meImg = document.createElement("img");
  meImg.src = "public/pictures/me.png";
  meImg.alt = "Image of the front end developer Laura Lei";
  meImg.className = "z-10 place-self-end";

  const ourCode = document.createElement("h1");
  ourCode.innerText = "Our Code";
  ourCode.className =
    "font-Karla text-4xl z-10 text-nowrap font-bold hidden lg:block";

  const sectionTwo = document.createElement("section");
  sectionTwo.className =
    "relative flex flex-col justify-center overflow-hidden h-full shadow-regular";

  const logoStamp = document.createElement("img");
  logoStamp.src = "public/logo/logoStamp.png";
  logoStamp.className =
    "absolute place-self-end pointer-events-none z-0 top-0 end-0 hidden lg:block";

  const headline = document.createElement("h1");
  headline.innerText = "I'm Laura Lei";
  headline.className =
    "font-Title text-5xl text-logoBlue font-semibold mt-10 ml-10 z-10 md:text-7xl";

  const text = document.createElement("div");
  text.className = "z-10 ml-10";
  text.innerHTML = `
      <p class="font-Karla text-3xl md:text-4xl my-10">Frontend developer, based in Bergen, Norway</p>
      <p class="font-Karla text-3xl  md:text-4xl my-10 max-w-[785px]"> Thank you for visiting my portfolio, and I hope you enjoy exploring my work as much as I enjoy creating it! </p>
      <p class=" font-Karla text-3xl  md:text-4xl my-10">take a look at my <a href="#/projects/index.html" class="blue-button">Projects</a>, and get to know a bit more <a href="#/about/index.html" class="blue-button">About</a> me!</p>
  `;

  main.append(sectionOne, sectionTwo);
  sectionOne.append(overlay, yourVision, meImg, ourCode);
  sectionTwo.append(logoStamp, headline, text);
};
