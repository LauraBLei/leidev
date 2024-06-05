import { router } from "./src/components/router.mjs";

const start = () => {
  router();
};

window.onhashchange = () => {
  router();
};
start();
