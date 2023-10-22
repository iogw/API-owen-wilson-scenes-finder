const callToApi = () => {
  return fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=5`)
    .then((response) => response.json())
    .then((apiData) => {
      const cleanData = apiData.map((eachData) => {
      return {
      img: eachData.poster,
      movieTitle: eachData.movie,
      year: eachData.year,
      phrase: eachData.full_line,
      director: eachData.director,
      audio: eachData.audio,
      video:eachData.video["480p"],
      };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default callToApi;
