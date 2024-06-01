import { runHomePage } from "../pages/index.js";

export function router() {
  const url = new URL(window.location.href);
  const hash = url.hash.slice(1);

  const routes = [
    // Regular Expression - RegEx for short
    { path: /^\/(index.html)?$/, controller: runHomePage },
    // { path: /^\/projects(\/index.html)?$/, controller: runProjectsPage },
    // { path: /^\/about(\/index.html)?$/, controller: runAboutPage },
    // { path: /^\/Project(\/index.html)?$/, controller: runAboutPage },

    { path: /.*/, controller: runHomePage },
  ];

  const route = routes.find((route) => route.path.test(hash));

  route.controller();
}
