import { carousel } from "../components/carousel.mjs";
import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runProjectPage = () => {
  resetPage();
  makeHeader();
  makeHTML();
};

const makeHTML = () => {
  const project = JSON.parse(localStorage.getItem("Project"));
  console.log(project);

  const main = document.querySelector("main");

  const pageDiv = document.createElement("div");
  pageDiv.className = "mt-[50px]";

  const h1 = document.createElement("h1");
  h1.textContent = project.title;
  h1.className =
    "font-Title text-7xl text-logoBlue font-semibold mb-[50px] text-center";

  const contentDiv = document.createElement("div");
  contentDiv.className = "flex justify-center gap-10 flex-wrap";

  const sectionOne = document.createElement("div");
  sectionOne.className = "max-w-[600px]";

  const sideBar = document.createElement("div");
  sideBar.className =
    "bg-logoBlue shadow-rightBox flex flex-col items-center justify-evenly p-8";

  const imageCarousel = document.createElement("div");
  imageCarousel.className = "relative flex items-center";

  const text = document.createElement("p");
  text.innerText = project.text;
  text.className = "font-Karla text-2xl my-6";

  const toolsDiv = document.createElement("div");
  toolsDiv.className = "my-6";
  const toolsTitle = document.createElement("h2");
  toolsTitle.innerText = "Web Development Tools:";
  toolsTitle.className =
    "font-Karla text-2xl text-white font-semibold text-center my-4";

  const tools = makeTools(project);

  const completionDateDiv = document.createElement("div");

  const completionDateTitle = document.createElement("h3");
  completionDateTitle.innerText = "Project Completion Date: ";
  completionDateTitle.className =
    "font-Karla text-2xl text-white font-semibold text-center my-4";

  const completionDate = document.createElement("p");
  completionDate.innerText = project.date;
  completionDate.className =
    "font-Karla text-xl text-white font-semibold text-center my-4";

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "flex flex-col items-center";

  const visitLivePages = document.createElement("a");
  visitLivePages.href = project.link.website;
  visitLivePages.target = "_blank";
  visitLivePages.className = "white-button m-6";
  visitLivePages.innerText = "Visit Live Pages";

  const visitRepo = document.createElement("a");
  visitRepo.href = project.link.repository;
  visitRepo.target = "_blank";
  visitRepo.className = "white-button m-6";
  visitRepo.innerText = "Visit Repo";

  main.appendChild(pageDiv);
  pageDiv.append(h1, contentDiv);
  contentDiv.append(sectionOne, sideBar);
  sectionOne.append(imageCarousel, text);
  sideBar.append(toolsDiv, completionDateDiv, buttonDiv);
  buttonDiv.append(visitLivePages, visitRepo);
  toolsDiv.append(toolsTitle, tools);
  completionDateDiv.append(completionDateTitle, completionDate);

  makeCarousel(project, imageCarousel);
};

const makeTools = (project) => {
  const tools = project.tags;
  const div = document.createElement("div");
  div.className = "flex flex-wrap gap-3";

  tools.forEach((element) => {
    const h3 = document.createElement("h3");
    h3.className = "white-button mx-2";
    h3.innerText = element;

    div.append(h3);
  });

  return div;
};

const makeCarousel = (project, carouselDiv) => {
  const images = project.images;

  console.log(images);

  const leftBtn = document.createElement("p");
  leftBtn.className = "prevBtn absolute z-10 mx-[15px] text-6xl";
  leftBtn.innerHTML = `<i class="fa-solid fa-caret-left" style="color: #ffffff;"></i>`;

  const rightBtn = document.createElement("p");
  rightBtn.className = "nextBtn absolute z-10 mx-[15px] right-0 text-6xl";
  rightBtn.innerHTML = `<i class="fa-solid fa-caret-right" style="color: #ffffff;"></i>`;

  const carouselImgs = document.createElement("div");
  carouselImgs.className = "max-w-[1000px]";

  carouselDiv.append(leftBtn, rightBtn, carouselImgs);

  images.forEach((element) => {
    const carouselBox = document.createElement("div");
    carouselBox.className = "carouselBox h-auto w-[600px] h-[280px]";

    const image = document.createElement("img");
    image.src = element;
    image.alt = "image of the Project";
    image.className = "h-full w-full object-cover";

    carouselBox.appendChild(image);
    carouselImgs.appendChild(carouselBox);
  });

  carousel();
};
