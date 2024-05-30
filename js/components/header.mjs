export const makeHeader = () => {
  const isFrontPage = !window.location.href.includes("projects");
  const prefix = isFrontPage ? "" : "../";
  makeHTML(prefix);
};

const makeHTML = (prefix) => {
  const header = document.querySelector("header");
  header.className = "height-100";

  const container = document.createElement("div");
  container.className = "flex flex-col bg-black height-100 items-center";

  const logoContainer = document.createElement("div");
  logoContainer.className = "m-t-50";

  const logo = document.createElement("img");
  logo.src = prefix + "public/logo/logo1.png";

  const nav = document.createElement("nav");
  nav.className = "flex flex-col navBar m-t-50";

  const home = document.createElement("a");
  home.innerText = "Home";
  home.href = prefix + "index.html";
  home.className = "font-50 style-none white font-pangolin";

  const about = document.createElement("a");
  about.innerText = "About";
  about.href = prefix + "LeiDev.html";
  about.className = "font-50 style-none white font-pangolin";

  const projects = document.createElement("a");
  projects.innerText = "Projects";
  projects.href = prefix + "projects/index.html";
  projects.className = "font-50 style-none white font-pangolin";

  header.appendChild(container);
  container.append(logoContainer, nav);
  logoContainer.appendChild(logo);
  nav.append(home, about, projects);
};
