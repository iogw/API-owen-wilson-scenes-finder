import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  //States
  const [scenesList, setScenesList] = useState([]);
  const [srchMovieVal, setSrchMovieVal] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setScenesList(response);
    });
  }, []);
  //handlers

  //renders
  const renderCardScenes = () => {
    const scene = scenesList.map((scene, i) => {
      return (
        <article key={i}>
          <img
            width="100px"
            src={scene.img}
            alt={`Póster de la película ${scene.movieTitle}`}
          />
          <h2>
            {scene.movieTitle} - {scene.year}
          </h2>
          <p>{scene.phrase}</p>
        </article>
      );
    });
    return scene;
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchMovie">
          <input
            type="text"
            name="searchMovie"
            id="searchMovie"
            value={srchMovieVal}
            onChange={(e) => setSrchMovieVal(e.currentTarget.value)}
          />
        </label>
      </form>
      {renderCardScenes()}
    </>
  );
}

export default App;
