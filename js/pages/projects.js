import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runProjectsPage = () => {
  resetPage();
  makeHeader();
  makeHTML();
};

const makeHTML = () => {
  const main = document.querySelector("main");

  const pageContainer = document.createElement("div");
  pageContainer.className = "boardImage width-100 height-100 overflow-scroll";

  const titleBox = document.createElement("div");
  titleBox.className = "width-100 flex justify-center";

  const titleOne = document.createElement("h1");
  titleOne.innerText = "Noroff Projects";
  titleOne.className = "titleCard bg-white m-t-50";

  const noroffGrid = document.createElement("div");
  noroffGrid.className = "grid mx-50";

  const marleysWorld = makeCard(
    "public/projectPictures/marleysWorld.png",
    "Marleys World"
  );

  const gameHubJS = makeCard("public/projectPictures/gameHubJS.png", "GameHub");

  const CMS = makeCard("public/projectPictures/CMS.png", "CMS");

  main.appendChild(pageContainer);
  pageContainer.append(titleBox, noroffGrid);
  titleBox.appendChild(titleOne);
  noroffGrid.append(marleysWorld, gameHubJS, CMS);
};

const makeCard = (imageSrc, titleText) => {
  const card = document.createElement("div");
  card.className =
    "bg-white m-t-50 card flex flex-col mx-50 self-center width-100";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.className = "cardImg";

  const title = document.createElement("h2");
  title.innerText = titleText;
  title.className = "font-30 font-comic m-b-10";

  card.append(image, title);

  return card;
};
