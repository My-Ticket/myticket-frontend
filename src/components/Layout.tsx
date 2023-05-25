import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}