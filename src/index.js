// Import Router ==>
import router from "./routes";

window.addEventListener("load", router); //> Carga 1 vez
// window => Página
//> Escuchar las rutas =>
window.addEventListener("hashchange", router); //> Carga 2 vez y hay cambios.
console.log("Hello");
