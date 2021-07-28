import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviePage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
