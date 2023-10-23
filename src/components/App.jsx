import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
//services
import callToApi from '../services/api';
//components
import Header from './Header/Header';
import Filters from './Filters/Filters';
import Loading from './Results/Loading';
import MovieSceneList from './Results/MovieSceneList';
import MovieSceneDetail from './Results/MovieSceneDetail';
import Footer from './Footer/Footer';
//Styles
import '../styles/layout/App.scss';

function App() {
  //States
  const [srchMovieVal, setSrchMovieVal] = useState('');
  const [srchYearVal, setSrchYearVal] = useState('all');
  const [scenesList, setScenesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //effects
  useEffect(() => {
    setIsLoading(true);
    callToApi().then((apiData) => {
      const apiDataWithId = apiData.map((el) => {
        return { ...el, id: uuid() };
      });
      setScenesList(apiDataWithId);
      setIsLoading(false);
    });
  }, []);

  // events
  const handleSrchYearSelect = (value) => setSrchYearVal(value);
  const handleSrchMovieInput = (value) => setSrchMovieVal(value);
  const handleRstBtn = () => {
    setSrchMovieVal('');
    setSrchYearVal('all');
  };

  //get data to props
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
  const getUniqueYearsList = () => {
    const yearsOfList = scenesList.map((scene) => scene.year);
    const uniqueSortedYears = [...new Set(yearsOfList)].sort();
    return uniqueSortedYears;
  };
  const { pathname } = useLocation();
  const getSceneData = () => {
    const routeData = matchPath('/scene/:id', pathname);
    const sceneId = routeData ? routeData.params.id : '';
    return scenesList.find((scene) => scene.id === sceneId);
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  srchMovieVal={srchMovieVal}
                  handleSrchMovieInput={handleSrchMovieInput}
                  yearsList={getUniqueYearsList()}
                  srchYearVal={srchYearVal}
                  handleSrchYearSelect={handleSrchYearSelect}
                  handleRstBtn={handleRstBtn}
                />
                <Loading loading={isLoading} />
                <MovieSceneList
                  filteredScenesList={getFilteredScenesList()}
                  isLoading={isLoading}
                  srchMovieVal={srchMovieVal}
                  srchYearVal={srchYearVal}
                />
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={
              <>
                <MovieSceneDetail sceneData={getSceneData()} />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
