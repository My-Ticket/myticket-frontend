import { Home } from './screens/Home'
import { Layout } from './screens/Layout'
import { Auth } from './screens/Auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Billboard from './screens/Billboard'
import { Reservation } from './screens/Reservation'

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
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App