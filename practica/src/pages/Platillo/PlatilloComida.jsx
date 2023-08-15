import React, { useState, useEffect } from 'react';
import Comida from '../../componentes/Comida/Comida';
import { getComidas } from "../../Api/ApiComidas";
import "./Platillos.css"
import Navegacion from "../../componentes/Navegacion/Navegacion"


function PlatilloComida() {

  const [listaComidas, setListaComidas] = useState([]);

  async function cargarComidas(letra = "a") {
    let resultadoComidas = await getComidas(letra);
    console.log(resultadoComidas);
    setListaComidas(resultadoComidas.meals ?? []);
  }

  useEffect(() => {
    cargarComidas();
  }, []);

  return (
    <div className='listaComida'>
      < Navegacion searchFood={cargarComidas} ></Navegacion>
      <h1 className='menu'>menu</h1>
      {listaComidas.length > 0 ? (<ul>
        {
          listaComidas.map((elemento, indice) => (<li className="lista" key={indice}><Comida
            precio={elemento.strMealThumb.length * 100}
            calorias={elemento.idMeal}
            image={elemento.strMealThumb}
            name={elemento.strMeal}></Comida></li>))
        }
      </ul>) : (<div>

        <h6>No hay platillos</h6>

      </div>)}


      {/* <Comida name="plato del día"></Comida> */}



    </div>

  )
}

export default PlatilloComida