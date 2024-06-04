import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";
import { noroffProjects } from "../components/arrays.mjs";

export const runProjectsPage = () => {
  resetPage();
  makeHeader();
  makeHTML();
};

const makeHTML = () => {
  const main = document.querySelector("main");

  const pageDiv = document.createElement("div");
  pageDiv.className =
    "flex flex-col items-center w-full h-full mt-[50px] min-h-screen";

  const h1 = document.createElement("h1");
  h1.className = "font-Title text-7xl font-semibold text-logoBlue";
  h1.innerHTML = `Projects <i class="fa-solid fa-user-group" style="color: #5D8EA4;"></i> `;

  const folderDiv = document.createElement("div");
  folderDiv.className = "w-full h-full mt-[50px]";

  const subjectDiv = document.createElement("div");

  const projectDiv = document.createElement("div");
  projectDiv.className =
    "bg-logoBlue h-full flex justify-center min-h-[1000px]";

  const noroffProjectTitle = document.createElement("h2");
  noroffProjectTitle.innerText = "Noroff Projects";
  noroffProjectTitle.className =
    "font-Karla text-3xl p-2 bg-logoBlue max-w-[375px] text-white text-center rounded-t-md h-full";

  const projects = makeNoroffProjects();

  main.append(pageDiv);
  pageDiv.append(h1, folderDiv);
  folderDiv.append(subjectDiv, projectDiv);
  projectDiv.append(projects);
  subjectDiv.appendChild(noroffProjectTitle);
};

const makeNoroffProjects = () => {
  const allProjects = noroffProjects;

  const div = document.createElement("div");
  div.className = "flex flex-wrap gap-8 my-[100px]";

  allProjects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "max-w-[250px] cursor-pointer";

    projectDiv.addEventListener("click", () => {
      localStorage.setItem("Project", JSON.stringify(project));
      window.location = "#/project/index.html";
    });

    const projectImg = document.createElement("img");
    projectImg.src = project.media.src;
    projectImg.alt = project.media.alt;
    projectImg.className = "max-h-[225px] w-[250px] rounded-md";

    const projectTitle = document.createElement("h3");
    projectTitle.className = "font-Karla text-2xl text-white text-center";
    projectTitle.innerText = project.title;

    div.append(projectDiv);
    projectDiv.append(projectImg, projectTitle);
  });
  return div;
};
