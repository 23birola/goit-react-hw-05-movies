import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import LoaderSpinner from './components/Loader/Loader';
import './App.css';
// import HomePage from './components/HomePage/HomePage';
// import MoviePage from './components/MoviePage/MoviePage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MoviePage = lazy(() =>
  import('./components/MoviePage/MoviePage' /*webpackChunkName: "MoviePage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/
  ),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr className="navigationHr" />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
            <Toaster />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
