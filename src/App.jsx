import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Movie from "./Pages/Movie";
import Home from "./Pages/Home";
import Person from "./Pages/Person";
import TV from "./Pages/TVPage";
import Search from "./Search/Search";
import Header from "./Components/Header";
import MovieResults from "./Search/MovieResults";
import TvResults from "./Search/TvResults";
import PeopleResults from "./Search/PeopleResults";
import NotFoundPage from "./Pages/NotFoundPage";
import { Context } from "./Context";
import { useState } from "react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route path="movie/:query" element={<MovieResults />} />
          <Route path="tv/:query" element={<TvResults />} />
          <Route path="people/:query" element={<PeopleResults />} />
        </Route>
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv" element={<div>tv-shows</div>} />
        <Route path="/tv/:id" element={<TV />} />
        <Route path="/people" element={<div>people</div>} />
        <Route path="/people/:id" element={<Person />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
const App = () => {
  const [query, setQuery] = useState();

  return (
    <Context.Provider value={{ query, setQuery }}>
      <div className=" m-auto  overflow-hidden mb-5">
        <RouterProvider router={router} />
      </div>
    </Context.Provider>
  );
};

export default App;
