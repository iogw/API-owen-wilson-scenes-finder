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
  const getFilteredScenesList = () => {
    const filteredScenes = scenesList
      .filter((scene) =>
        scene.movieTitle.toLowerCase().includes(srchMovieVal.toLowerCase())
      )
      .filter((scene) =>
        srchYearVal === 'all' ? true : scene.year.toString() === srchYearVal
      );
    return filteredScenes;
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
      <MovieSceneList filteredScenesList={getFilteredScenesList()} />
    </>
  );
}

export default App;
