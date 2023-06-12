import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";
import { Auth } from "./screens/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Billboard from "./screens/Cartelera";
import { Reservation } from "./screens/Reservation";
import Estreno from "./screens/Estrenos";
import { NotFoundImage } from "./screens/NotFound";
import Panel from "./admin/Panel";
import { Children } from "react";
import { TableScrollArea } from "./screens/History";
import Rooms from "./admin/Rooms";

const historial = [
  {
    pelicula: "Rapidos y furiosos X",
    fecha: "10/06/2023",
    boletos: "2",
    sala: "2",
  },
  { pelicula: "Transformers", fecha: "12/06/2023", boletos: "3", sala: "1" },
  {
    pelicula: "El señor de los anillos",
    fecha: "13/06/2023",
    boletos: "1",
    sala: "3",
  },
  { pelicula: "Spiderman", fecha: "14/06/2023", boletos: "5", sala: "4" },
  { pelicula: "Harry Potter", fecha: "15/06/2023", boletos: "4", sala: "5" },
  { pelicula: "Star Wars", fecha: "16/06/2023", boletos: "6", sala: "1" },
  { pelicula: "Avengers", fecha: "17/06/2023", boletos: "7", sala: "4" },
  { pelicula: "El padrino", fecha: "18/06/2023", boletos: "8", sala: "3" },
  { pelicula: "Jurassic Park", fecha: "19/06/2023", boletos: "9", sala: "3" },
  {
    pelicula: "Guardianes de la galaxia vol.3",
    fecha: "20/06/2023",
    boletos: "10",
    sala: "2",
  },
  { pelicula: "Titanic", fecha: "21/06/2023", boletos: "11", sala: "1" },
  {
    pelicula: "Super Mario Bros",
    fecha: "22/06/2023",
    boletos: "12",
    sala: "4",
  },
  { pelicula: "Harry Potter", fecha: "23/06/2023", boletos: "13", sala: "3" },
  { pelicula: "Star Wars", fecha: "24/06/2023", boletos: "14", sala: "1" },
  { pelicula: "Avengers", fecha: "25/06/2023", boletos: "15", sala: "1" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cartelera",
        element: <Billboard />,
      },
      {
        path: "/reserva",
        element: <Reservation />,
      },
      {
        path: "/estrenos",
        element: <Estreno />,
      },
      {
        path: "/historial",
        element: <TableScrollArea data={historial} />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Panel />,
    children: [],
  },
  {
    path: "/admin/rooms",
    element: <Rooms />,
  },
  {
    path: "/login",
    element: <Auth register={false} />,
  },
  {
    path: "/register",
    element: <Auth register={true} />,
  },
  {
    path: "*",
    element: <NotFoundImage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
