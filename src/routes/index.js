// Import Loaders With Webpack ==>
import "../styles/main.css";
import { Header } from "../templates/header";
import { Home } from "../pages/home";
import { Character } from "../pages/character";
import { Error404 } from "../pages/Error404";
import { getHash } from "../utils/getHash";
import { resolveRouters } from "../utils/resolveRouters";

// Routes =Rutas=>
const routes = {
  "/": Home,
  "/:id": Character,
  "/contact ": `contact`,
};

// Manejador ==Agegar con js a html==>
const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  // add hash and resolve (2)>
  let hash = getHash();
  let route = await resolveRouters(hash);

  // Render all>
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};
export default router;
