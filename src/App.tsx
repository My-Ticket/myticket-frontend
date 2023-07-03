import { Layout } from "./screens/Layout";
import { Auth } from "./screens/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Billboard from "./screens/Billboard.tsx";
import { Reservation } from "./screens/Reservation";
import Estreno from "./screens/Upcoming.tsx";
import { NotFoundImage } from "./screens/NotFound";
import Panel from "./screens/admin/Panel.tsx";
import { TableScrollArea } from "./screens/History";
import Rooms from "./screens/admin/Rooms.tsx";
import { RecoilRoot } from "recoil";
import Sala from "./screens/Sala";
import { mockHistory } from "./util/mockData";
import MoviesList from "./screens/admin/movies/MoviesList.tsx";
import { Subscription } from "./screens/Subscription";
import { Settings } from "./screens/Settings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Billboard />,
      },
      {
        path: "/reserva",
        element: <Reservation />,
      },
      {
        path: "/estrenos",
        element: <Estreno/>
      },
      {
        path: "/sala",
        element: <Sala/>
      },
      {
        path: "/historial",
        element: <TableScrollArea data={mockHistory} />,
      },
      {
        path: "/suscripcion",
        element: <Subscription />
      },
      {
        path: "/configuracion",
        element: <Settings />
      }
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
    path: "/admin/movies/",
    element: <MoviesList />,
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

  return (
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
    )
}

export default App;
