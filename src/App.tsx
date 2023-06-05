import { Home } from './screens/Home'
import { Layout } from './screens/Layout'
import { Auth } from './screens/Auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Billboard from './screens/Cartelera'
import { Reservation } from './screens/Reservation'
import Estreno from './screens/Estrenos'
import { NotFoundImage } from './screens/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cartelera",
        element: <Billboard/>
      },
      {
        path: "/reserva",
        element: <Reservation/>
      },
      {
        path: "/estrenos",
        element: <Estreno/>
      }
    ]
  },
  {
    path: "/login",
    element: <Auth register={false}/>
  },
  {
    path: "/register",
    element: <Auth register={true}/> 
  },
  {
    path: "*",
    element: <NotFoundImage/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App