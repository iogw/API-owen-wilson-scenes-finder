const callToApi = () => {
  return fetch(`https://owen-wilson-wow-api.onrender.com/wows/random?results=5`)
    .then((response) => response.json())
    .then((apiData) => {
      const cleanData = apiData.map((eachData) => {
      return {
      img: eachData.poster,
      movieTitle: eachData.movie,
      phrase: eachData.full_line,
      year: eachData.year,
      };
      });
      return cleanData;
    });
};

export default callToApi;
