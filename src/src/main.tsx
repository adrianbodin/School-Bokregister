import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './css/main.css'
import Home from "./pages/home.tsx";
import NotFound from "./pages/not-found.tsx";
import Layout from "./pages/layout.tsx";

//Here i configure all the routes for react router
const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
