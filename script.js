import { router } from "./js/components/router.mjs";

const start = () => {
  router();
};

window.onhashchange = () => {
  router();
};
start();
