import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/login";
import Practica from "./pages/Practica/Practica";
import { useState, useEffect } from 'react';
import PlatilloComida from './pages/Platillo/PlatilloComida'
import NotFound from './pages/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Login></Login>
    },
    {
      path: "/practica",
      element: <Practica></Practica>

    },
    {
      path: "/platillo",
      element: <PlatilloComida />
    },
    {
      path: "*",
      element: <NotFound />
    }


  ])

  let nombre = "Kiara Carvajal";
  let estudiante = { carnet: "007", nombre: "Agente P" }



  // useEffect( /* funcioncallback/  , / lista dependencias */ )

  return (
    <div className="App">
      <header className="App-header">

        <RouterProvider router={router} ></RouterProvider>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Hola {nombre}
        </p>
        <p>El agente{estudiante.nombre}está en el aula </p>


        <br />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
