import { Menu } from "./components/menu/Menu"
import { NavBar } from "./components/navbar/NavBar"
import { Users } from "./pages/users/Users"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import "./styles/global.scss"
import { ErrorPage } from "./components/error/ErrorPage"

function App() {
  // if we have another page that doesn't needs to be display the navbar and other components
  // we can declare path to that component and not include the layopout with it
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

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
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
