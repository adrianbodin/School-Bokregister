import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/main.css'
import Home from "./pages/home.tsx";
import NotFound from "./pages/not-found.tsx";
import Layout from "./layout.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import IndividualBook from "./pages/individual-book.tsx";

//Here i configure all the routes for react router
const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books/:isbn',
        element: <IndividualBook/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
