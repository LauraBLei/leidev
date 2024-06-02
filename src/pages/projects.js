import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runProjectsPage = () => {
  resetPage();
  makeHeader();
  makeHTML();
};

const makeHTML = () => {
  const main = document.querySelector("main");
};
