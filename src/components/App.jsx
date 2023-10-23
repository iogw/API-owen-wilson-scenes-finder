import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  matchPath,
  Navigate,
} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
//services
import callToApi from '../services/api';
import localStor from '../services/localStorage';
//components
import Header from './Header/Header';
import Filters from './Filters/Filters';
import Loading from './Results/Loading';
import MovieSceneList from './Results/MovieSceneList';
import MovieSceneDetail from './Results/MovieSceneDetail';
import Footer from './Footer/Footer';
//Styles
import '../styles/layout/App.scss';
import ArrowBtn from './ArrowBtn';

function App() {
  //States
  // const dataTest = [
  //   {
  //     audio:
  //       'https://assets.ctfassets.net/bs8ntwkklfua/1dXEYZQP1Fl6CX1roy7ZAH/f31b90a6f961dcc16c16b294f4faf664/The_Big_Year_Wow_3.mp3',
  //     character: 'Kenny Bostick',
  //     currentWow: 3,
  //     director: 'David Frankel',
  //     id: 'cfc0674f-fb8f-46c1-b1b7-a9e4f3596a3c',
  //     img: 'https://images.ctfassets.net/bs8ntwkklfua/pCjGOhbTCQVjLRN9zTwIi/ce7cdf4b40f3549326d881697aa468a1/The_Big_Year_Poster.jpg',
  //     movieTitle: 'The Big Year',
  //     phrase: 'Wow, and here I thought I was the bomb at 728.',
  //     timeStamp: '01:08:23',
  //     totalWows: 3,
  //     video:
  //       'https://videos.ctfassets.net/bs8ntwkklfua/55z94kbUxNFIL0rYb1i2mH/ca0505ca5e2017b663f18cca8af571b2/The_Big_Year_Wow_3_480p.mp4',
  //     year: 2011,
  //   },
  // ];
  const [scenesList, setScenesList] = useState([]);
  const [lsScenesList, setLsScenesList] = useState(
    localStor.get('sceneList', [])
  );
  const [srchMovieVal, setSrchMovieVal] = useState('');
  const [srchYearVal, setSrchYearVal] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  //effects
  useEffect(() => {
    setIsLoading(true);
    callToApi().then((apiData) => {
      const apiDataWithId = apiData.map((el) => {
        return { ...el, id: uuid() };
      });
      setScenesList(apiDataWithId);
      const lsAndActualList = [...lsScenesList, ...apiDataWithId];
      setLsScenesList(lsAndActualList);
      localStor.set('sceneList', lsAndActualList);
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
  const totalFilteredList = getFilteredScenesList().length;
  const getUniqueYearsList = () => {
    const yearsOfList = scenesList.map((scene) => scene.year);
    const uniqueSortedYears = [...new Set(yearsOfList)].sort();
    return uniqueSortedYears;
  };
  const { pathname } = useLocation();
  const getSceneData = () => {
    const routeData = matchPath('/scene/:id', pathname);
    const sceneId = routeData ? routeData.params.id : '';
    const findData = lsScenesList.find((scene) => scene.id === sceneId);
    return findData;
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
                  totalFilteredList={totalFilteredList}
                />
                <Loading loading={isLoading} />
                <MovieSceneList
                  filteredScenesList={getFilteredScenesList()}
                  isLoading={isLoading}
                  srchMovieVal={srchMovieVal}
                  srchYearVal={srchYearVal}
                />
                <ArrowBtn />
              </>
            }
          />
          <Route path="/header" element={<Navigate to="/" />} />

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
