import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  //States
  const [scenesList, setScenesList] = useState([]);
  const [srchMovieVal, setSrchMovieVal] = useState('');
  const [srchYearVal, setSrchYearVal] = useState('all');

  //effects
  useEffect(() => {
    callToApi().then((response) => setScenesList(response));
  }, []);

  //events
  const handleSelect = (e) => setSrchYearVal(e.target.value);

  //renders
  const renderSrchYearOptions = () => {
    const yearsOfList = scenesList.map((scene) => scene.year);
    const uniqueSortYears = [...new Set(yearsOfList)].sort();
    const option = uniqueSortYears.map((year) => {
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    });
    return option;
  };

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

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchMovie">Busca por peli: </label>
        <input
          type="text"
          name="searchMovie"
          id="searchMovie"
          value={srchMovieVal}
          onChange={(e) => setSrchMovieVal(e.currentTarget.value)}
        />
        <label htmlFor="searchYear">Selecciona un año: </label>
        <select
          name="searchYear"
          id="searchYear"
          value={srchYearVal}
          onChange={handleSelect}
        >
          <option value='all'>Todos</option>
          {renderSrchYearOptions()}
        </select>
      </form>
      {renderCardScenes()}
    </>
  );
}

export default App;
