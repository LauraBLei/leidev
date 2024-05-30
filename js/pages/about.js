import { makeHeader } from "../components/header.mjs";
import { resetPage } from "../components/resetPage.mjs";

export const runAboutPage = () => {
  resetPage();
  makeHeader();
};
