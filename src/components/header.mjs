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
  nav.className = "flex";

  const home = document.createElement("a");
  home.innerText = "Home";
  home.href = "#/";
  home.className =
    "font-Karla text-4xl text-logoBlue mx-5 cursor-pointer hover:translate-2";

  const projects = document.createElement("a");
  projects.innerText = "Projects";
  projects.href = "#/projects/index.html";
  projects.className = "font-Karla text-4xl text-logoBlue mx-5 cursor-pointer";

  const about = document.createElement("a");
  about.innerText = "About";
  about.href = "#/about/index.html";
  about.className = "font-Karla text-4xl text-logoBlue mx-5 cursor-pointer";

  const contactDetails = document.createElement("details");

  const contact = document.createElement("summary");
  contact.innerText = "Contact";
  contact.className =
    "font-Karla text-4xl text-logoBlue mx-5 text list-none cursor-pointer";

  const contactDiv = document.createElement("div");
  contactDiv.className =
    "z-20 absolute bg-logoBlue text-white w-full left-0 flex justify-center items-center gap-9 h-[150px] text-2xl font-Karla mt-[35px] shadow-regular";

  const emailDiv = document.createElement("div");
  emailDiv.className = "flex gap-3";

  const emailText = document.createElement("p");
  emailText.innerText = "Email: ";

  const email = document.createElement("p");
  email.innerText = "leiDev@email.com";

  const github = document.createElement("a");
  github.innerHTML = `<i class="fa-brands fa-square-github fa-xl cursor-pointer" style="color: #ffffff;"></i>`;
  github.target = "_blank";
  github.href = "https://github.com/LauraBLei";

  const linkedIn = document.createElement("a");
  linkedIn.innerHTML = `<i class="fa-brands fa-linkedin fa-xl cursor-pointer" style="color: #ffffff;"></i>`;
  linkedIn.target = "_blank";
  linkedIn.href = "https://www.linkedin.com/in/laura-lei-860190268/";

  header.append(logo, nav);
  nav.append(home, projects, about, contactDetails);
  contactDetails.append(contact, contactDiv);
  contactDiv.append(emailDiv, github, linkedIn);
  emailDiv.append(emailText, email);
};
