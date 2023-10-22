import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Header from './Header/Header';
import Filters from './Main/Filters/Filters';
import MovieSceneList from './Main/Results/MovieSceneList';

function App() {
  //States
  const [srchMovieVal, setSrchMovieVal] = useState('');
  const [srchYearVal, setSrchYearVal] = useState('all');
  const [scenesList, setScenesList] = useState([]);

  //effects
  useEffect(() => {
    callToApi().then((response) => setScenesList(response));
  }, []);

  //events
  const handleSrchMovieInput = (value) => setSrchMovieVal(value);
  const handleSrchYearSelect = (value) => setSrchYearVal(value);

  //renders
  const renderCardScenes = () => {
    const scene = scenesList
      .filter((scene) =>
        scene.movieTitle.toLowerCase().includes(srchMovieVal.toLowerCase())
      )
      .filter((scene) =>
        srchYearVal === 'all' ? true : scene.year.toString() === srchYearVal
      )
      .map((scene, i) => {
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

  //data
  const getUniqueYearsList = () => {
    const yearsOfList = scenesList.map((scene) => scene.year);
    const uniqueSortedYears = [...new Set(yearsOfList)].sort();
    return uniqueSortedYears;
  };

  return (
    <>
      <Header />
      <Filters
        srchMovieVal={srchMovieVal}
        handleSrchMovieInput={handleSrchMovieInput}
        yearsList={getUniqueYearsList()}
        srchYearVal={srchYearVal}
        handleSrchYearSelect={handleSrchYearSelect}
      />
      {/* <MovieSceneList /> */}
    </>
  );
}

export default App;
