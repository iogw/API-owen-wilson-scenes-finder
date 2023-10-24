const callToApi = () => {
  return fetch(
    `https://owen-wilson-wow-api.onrender.com/wows/random?results=100`
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
          character: eachData.character,
          timeStamp: eachData.timestamp,
          totalWows: eachData.total_wows_in_movie,
          currentWow: eachData.current_wow_in_movie,
        };
      });
      return cleanData;
    });
};

export default callToApi;
