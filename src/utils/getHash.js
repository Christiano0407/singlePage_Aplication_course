// Get Hash ==> Permite encontrar la ubicación exacta de la petición.
export const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
