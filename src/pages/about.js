import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";
import { webTools } from "../components/arrays.mjs";

export const runAboutPage = () => {
  resetPage();
  makeHeader();
  makeHTML();
};

const makeHTML = () => {
  const main = document.querySelector("main");

  const pageContainer = document.createElement("div");
  pageContainer.className =
    "mt-[50px] mx-[25px] md:ml-[20px] flex justify-center flex-wrap overlow-auto gap-6";

  const aboutContainer = document.createElement("div");
  aboutContainer.className =
    "overflow-auto no-scrollbar flex flex-col items-center max-w-[750px]";

  const quoteContainer = document.createElement("div");
  quoteContainer.className =
    "max-w-[600px] flex flex-col items-center justify-center gap-6 bg-logoBlue shadow-rightBox text-white p-[30px] md:p-[60px]";

  const title = document.createElement("h1");
  title.className =
    "flex font-title text-4xl md:text-7xl text-logoBlue gap-8 m-[25px] font-semibold";
  title.innerHTML = `About me!`;

  const text = document.createElement("div");
  text.className = "max-w-[650px] font-Karla text-2xl md:text-3xl";
  text.innerHTML = `
  <p class="my-[25px]">My name is Laura, and i am based in Bergen, Norway.</p>
  <p class="my-[25px]">Although I have only been coding for about a year, I am a quick learner with a genuine love for this field. </p>
  <p class="my-[25px]">I love learning new things and developing myself as a person and in my professional field. </p>
  <p class="my-[25px]">I thrive working in a team or by myself, i love to debate and  brain storm with other people, and have also learned a lot from helping my fellow students, debugging their code! For me helping others can be just as educational if not more, than working alone. </p>
  `;

  const webToolsTitle = document.createElement("h2");
  webToolsTitle.innerText = "Web Development Tools:";
  webToolsTitle.className = "text-logoBlue text-3xl mt-[35px] mb-[25px]";

  const toolsDiv = makeTools();

  const quote = document.createElement("p");
  quote.className = "font-quote text-3xl";
  quote.innerText = `"The will to want, creates the ability to act"`;

  const quoteText = document.createElement("p");
  quoteText.className = "text-2xl md:text-3xl font-Karla";
  quoteText.innerText = `This quote reminded me of my late father. His philosophy has guided my career, driving me to master new skills, lead projects, and overcome challenges. My strong work ethic and commitment to achieving goals make me a valuable asset, ready to contribute passionately to your team`;

  main.appendChild(pageContainer);
  pageContainer.append(aboutContainer, quoteContainer);
  aboutContainer.append(title, text, webToolsTitle, toolsDiv);
  quoteContainer.append(quote, quoteText);
};

const makeTools = () => {
  const tools = webTools;
  const div = document.createElement("div");
  div.className = "flex flex-wrap gap-3 max-w-[650px] mb-[50px]";

  tools.forEach((tool) => {
    const h3 = document.createElement("h3");
    h3.innerText = tool;
    h3.className = "blue-button";
    div.append(h3);
  });

  return div;
};
