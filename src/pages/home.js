import { getData } from "../utils/getData";

export const Home = async () => {
  const characters = await getData();

  const view = `
  <div class="character">
     ${characters.results
       .map(
         (character) => ` 
      <article class="character-item">
           <a href="#/${character.id} /">
           <img id="imgAPI" class="imgAll" src="${character.image}" alt="${character.name}">
           <h2>${character.name}</h2>
           </a>
     </article>
     `
       )
       .join(``)}
  </div>
  `;
  return view;
};
