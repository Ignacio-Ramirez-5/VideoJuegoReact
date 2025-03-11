import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/videogames/Games";
import GamesDetails from "./pages/GamesDetails/GamesDetails";
import TagPage from "./pages/TagPage/TagPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/games",
    element: (
      <>
        <Navbar />
        <Games />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/games/:id",  // Ruta para los detalles del juego
    element: (
      <>
        <Navbar />
        <GamesDetails />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/tags/:tagSlug",
    element: (
      <>
        <Navbar />
        <TagPage />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
