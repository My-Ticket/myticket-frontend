import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";
import { Auth } from "./screens/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Billboard from "./screens/Cartelera";
import { Reservation } from "./screens/Reservation";
import Estreno from "./screens/Estrenos";
import { NotFoundImage } from "./screens/NotFound";
import Panel from "./admin/Panel";
import { TableScrollArea } from "./screens/History";
import Rooms from "./admin/Rooms";
import { RecoilRoot } from "recoil";
import Sala from "./screens/Sala";
import { mockHistory } from "./util/mockData";


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

  return (
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
    )
}

export default App;
