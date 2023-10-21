const callToApi = (searchName) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
      //SI HAY QUE LIMPIAR LOS DATOS
      // const result = data.map((serie) => {
      // return {
      // id: serie.show.id,
      // name: serie.show.name,
      // };
      // });
      // return result;
    });
};

export default callToApi;
