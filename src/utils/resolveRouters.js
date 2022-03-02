// Para saber a dónde va a llegar o mandar ===>
// Si no es un # => es "/ => "id.

export const resolveRouters = (route) => {
  if (route.length <= 3) {
    let validRoute = route === `/` ? route : ` /: id `;
    return validRoute;
  }
  return `/${route}`; // About
};
