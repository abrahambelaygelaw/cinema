import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MoviesPage from "./MoviesPage";
import Movie from "./Movie";
import Home from "./Home";
const apikey = import.meta.env.VITE_API_KEY;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tv-shows" element={<div>tv-shows</div>} />
    </>
  )
);
const App = () => {
  return (
    <div className="p-5 m-auto max-w-screen-2xl overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
