import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Resume/Resume';
import Contact from './Components/Pages/Contact/Contact';
import Skills from './Components/Pages/Skills/Skills';
import Projects from './Components/Pages/Projects/Projects';
import AuthProvider from './Components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className=' bg-black'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
