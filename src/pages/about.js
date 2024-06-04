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
    "mt-[50px] ml-[20px] flex justify-center flex-wrap overlow-auto";

  const aboutContainer = document.createElement("div");
  aboutContainer.className =
    "overflow-auto no-scrollbar flex flex-col items-center max-w-[750px]";

  const quoteContainer = document.createElement("div");
  quoteContainer.className =
    "max-w-[600px] flex flex-col items-center justify-center gap-6 bg-logoBlue shadow-rightBox text-white p-[60px]";

  const title = document.createElement("h1");
  title.className = "flex font-title text-7xl text-logoBlue gap-8 m-[25px]";
  title.innerHTML = `About Me <svg xmlns="http://www.w3.org/2000/svg" width="71" height="67" viewBox="0 0 71 67" fill="none">
  <path d="M50.1835 20.781V27.7138M50.1782 12.3693C50.091 12.3693 50.0047 12.3528 49.9242 12.3208C49.8437 12.2888 49.7706 12.242 49.7092 12.1829C49.6478 12.1238 49.5993 12.0538 49.5664 11.9767C49.5335 11.8997 49.517 11.8172 49.5177 11.734C49.5177 11.3782 49.816 11.0986 50.1782 11.0986M50.1888 12.3693C50.3645 12.368 50.5325 12.3004 50.6562 12.1814C50.7799 12.0624 50.8493 11.9016 50.8493 11.734C50.85 11.6508 50.8334 11.5683 50.8006 11.4912C50.7677 11.4142 50.7191 11.3441 50.6577 11.285C50.5963 11.226 50.5233 11.1791 50.4428 11.1471C50.3623 11.1151 50.276 11.0986 50.1888 11.0986M2.01074 64.2223H65.9659M8.04033 33.5486C8.04033 34.8428 8.30747 36.1244 8.8265 37.3201C9.34554 38.5157 10.1063 39.6022 11.0653 40.5173C12.0244 41.4325 13.1629 42.1584 14.416 42.6537C15.6691 43.1489 17.0121 43.4039 18.3684 43.4039C19.7247 43.4039 21.0677 43.1489 22.3208 42.6537C23.5738 42.1584 24.7124 41.4325 25.6714 40.5173C26.6305 39.6022 27.3912 38.5157 27.9103 37.3201C28.4293 36.1244 28.6964 34.8428 28.6964 33.5486C28.6964 32.2544 28.4293 30.9729 27.9103 29.7772C27.3912 28.5815 26.6305 27.4951 25.6714 26.5799C24.7124 25.6648 23.5738 24.9389 22.3208 24.4436C21.0677 23.9483 19.7247 23.6934 18.3684 23.6934C17.0121 23.6934 15.6691 23.9483 14.416 24.4436C13.1629 24.9389 12.0244 25.6648 11.0653 26.5799C10.1063 27.4951 9.34554 28.5815 8.8265 29.7772C8.30747 30.9729 8.04033 32.2544 8.04033 33.5486Z" stroke="#5D8EA4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 64.2276V59.023C2 54.8812 3.72423 50.9092 6.79338 47.9805C9.86253 45.0519 14.0252 43.4066 18.3656 43.4066C22.7061 43.4066 26.8687 45.0519 29.9379 47.9805C33.007 50.9092 34.7313 54.8812 34.7313 59.023V64.2276M36.8299 32.9745C39.9251 35.8646 43.9653 37.6547 48.2765 38.0462C52.5876 38.4376 56.9091 37.4067 60.52 35.1255C64.1309 32.8443 66.813 29.4506 68.1189 25.5106C69.4247 21.5706 69.2754 17.3224 67.6957 13.4748C66.1161 9.62714 63.2017 6.41263 59.4386 4.36745C55.6756 2.32228 51.2914 1.5701 47.0174 2.23637C42.7435 2.90265 38.8381 4.94711 35.9528 8.02871C33.0676 11.1103 31.3768 15.0427 31.1625 19.17" stroke="#5D8EA4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const text = document.createElement("div");
  text.className = "max-w-[650px] font-Karla text-3xl";
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
  quoteText.className = "text-3xl font-Karla";
  quoteText.innerText = `My late father always said, " The will to want creates the ability to act. " This philosophy has guided my career, driving me to master new skills, lead projects, and overcome challenges with determination. My strong work ethic and commitment to achieving goals make me a valuable asset, ready to contribute passionately to your team.`;

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
