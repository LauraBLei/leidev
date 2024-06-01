export const makeHeader = () => {
  makeHTML();
};

const makeHTML = () => {
  const header = document.querySelector("header");

  const logo = document.createElement("img");
  logo.src = "public/logo/logo1.png";
  logo.alt = "Lei Dev Logo";
  logo.className = "max-h-[109px]";

  const nav = document.createElement("nav");

  const home = document.createElement("a");
  home.innerText = "Home";
  home.className = "font-Karla text-4xl text-logoBlue mx-5";

  const projects = document.createElement("a");
  projects.innerText = "Projects";
  projects.className = "font-Karla text-4xl text-logoBlue mx-5";

  const about = document.createElement("a");
  about.innerText = "About";
  about.className = "font-Karla text-4xl text-logoBlue mx-5";

  const contact = document.createElement("a");
  contact.innerText = "Contact";
  contact.className = "font-Karla text-4xl text-logoBlue mx-5";

  header.append(logo, nav);
  nav.append(home, projects, about, contact);
};
