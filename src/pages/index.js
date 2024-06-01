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
    "relative bg-colorBg flex w-full flex justify-center items-center shadow-regular";

  const overlay = document.createElement("div");
  overlay.className =
    "absolute inset-0 bg-white opacity-50 pointer-events-none";

  const yourVision = document.createElement("h1");
  yourVision.innerText = "Your Vision";
  yourVision.className = "font-Karla text-6xl z-10";

  const meImg = document.createElement("img");
  meImg.src = "public/pictures/me.png";
  meImg.alt = "Image of the front end developer Laura Lei";
  meImg.className = "z-10";

  const ourCode = document.createElement("h1");
  ourCode.innerText = "Our Code";
  ourCode.className = "font-Karla text-6xl z-10";

  const sectionTwo = document.createElement("section");
  sectionTwo.className = "relative flex flex-col justify-center";

  const logoStamp = document.createElement("img");
  logoStamp.src = "public/logo/logoStamp.png";
  logoStamp.className = "absolute";

  const headline = document.createElement("h1");
  headline.innerText = "I'm Laura Lei";
  headline.className = "font-Title text-7xl text-logoBlue font-semibold";

  const text = document.createElement("div");
  text.innerHTML = `
      <p>Frontend developer, based in Bergen, Norway</p>
      <p>Thank you for visiting my portfolio, and I hope you enjoy exploring my work as much as I enjoy creating it!</p>
      <p>take a look at my <button>Projects</button>, and get to know a bit more <button>About</button> me!</p>
      <p>Download my <button>Resume</button> or <button>contact</button> me.</p>
  `;

  main.append(sectionOne, sectionTwo);
  sectionOne.append(overlay, yourVision, meImg, ourCode);
  sectionTwo.append(logoStamp, headline, text);
};
