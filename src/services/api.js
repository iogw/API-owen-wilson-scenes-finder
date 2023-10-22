const callToApi = () => {
  return fetch(
    `https://owen-wilson-wow-api.onrender.com/wows/random?results=92`
  )
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
          video: eachData.video['480p'],
        };
      });
      return cleanData;
    });
};

export default callToApi;
