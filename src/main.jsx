import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Games from "./pages/videogames/Games";
import GamesDetails from "./pages/GamesDetails/GamesDetails";
import TagPage from "./pages/TagPage/TagPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

// Configuración del router
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
    path: "/Games",
    element: (
      <>
        <Navbar />
        <Games />
        <Footer />
      </>
    ),
  },
  {
    path: "/gamesDetails/:id",  // Asegúrate de que esta ruta esté correcta
    element: (
      <>
        <Navbar />
        <GamesDetails />
        <Footer />
      </>
    ),
  },
  {
    path: "/tags/:slug",
    element: (
      <>
        <Navbar />
        <TagPage />
        <Footer />
      </>
    ),
  },
]);

// Renderizado de la app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
