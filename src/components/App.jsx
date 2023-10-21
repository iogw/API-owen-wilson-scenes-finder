import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  //States
  const [scenesList, setSceneList] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setSceneList(response);
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

  return <>{renderCardScenes()}</>;
}

export default App;
