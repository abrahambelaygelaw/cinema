import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MoviesPage from "./Movies/MoviesPage";
import Movie from "./Movie/Movie";
import Home from "./Home";
import Person from "./Person/Person";
import TV from "./TV";
import Search from "./Search/Search";
import Header from "./Header";
import MovieResults from "./Search/MovieResults";
import TVResults from "./Search/TVResults";
import PeopleResults from "./Search/PeopleResults";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />}>
        <Route path="movie/:query" element={<MovieResults />} />
        <Route path="tv-shows/:query" element={<TVResults />} />
        <Route path="people/:query" element={<PeopleResults />} />
      </Route>
      <Route path="/movies" element={<MoviesPage sort_by="popularity" />}>
        <Route
          path="/movies/popular"
          index
          element={<MoviesPage sort_by="popularity" />}
        />
        <Route
          path="/movies/top-rated"
          element={<MoviesPage sort_by="vote_average" />}
        />
      </Route>
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tv" element={<div>tv-shows</div>} />
      <Route path="/tv/:id" element={<TV />} />
      <Route path="/people" element={<div>people</div>} />
      <Route path="/people/:id" element={<Person />} />
    </>
  )
);
const App = () => {
  return (
    <div className=" m-auto  overflow-hidden">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
