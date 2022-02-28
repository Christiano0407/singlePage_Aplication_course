// Import Loaders With Webpack ==>
import "../styles/main.css";
import { Header } from "../templates/header.js";
import { Home } from "../pages/home.js";
import { Character } from "../pages/character.js";
import { Error404 } from "../pages/Error404.js";

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
};
export default router;
