import React from 'react'
import { useState, useEffect } from 'react';
import Boton from '../../componentes/Boton/Boton';
import Titulo from '../../componentes/Titulo/Titulo';
import Perry from '../../componentes/Perry/Perry';
import ElementoLista from '../../componentes/Elemento-lista/Elemento-lista';
function Practica() {


    const inventos = [
        "Magneto Gigante",
        "Destructinador",
        "Edificio Robot Gigante",
        "Desinfla-inador",
        "Acelerador de edad y tiempo (Age Accelerator-inator)",
        "Hipnotizador (The Slave-inator)",
        "Drill-inator",
        "Plans for magnet",
        "Desinteti-vaporizador",
        "Copy and Paste-inator",
        "Termite Controlling Helmet",
        "Melt-inator 6-5000-inator",
    ];

    const [tieneSombrero, setTieneSombrero] = useState(false)
    const [textoBoton, setTextoBoton] = useState("poner sombrero");

    const [contador, setContador] = useState(0);


    useEffect(() => {

        document.title = " Count: " + contador

    }, [contador]
    )



    function aumentarContador() {
        setContador(contador + 1);
    }

    useEffect(() => {

        document.title = " Count: " + contador

    }, [contador]
    )

    function ponerSombrero() {
        setTieneSombrero(!tieneSombrero);

        // usamos el hook de useStates
        if (!tieneSombrero === true) {
            setTextoBoton("quitar sombrero")
        }
        else {
            setTextoBoton("poner sombrero")
        }
    }

    const [tiempo, setTiempo] = useState(0);

    useEffect(() => {
        const cronometroId = setInterval(() => {
            setTiempo(tiempo + 1);

        }, 1000);
        return () => { clearInterval(cronometroId) }
    }, [tiempo])
    // ----------------------------------------------------------------


    return (
        <div>
            <p>{tiempo}</p>

            <Boton onClick={aumentarContador} nombreBoton="Aumentar Contador"></Boton>
            <Titulo tieneSombrero={tieneSombrero} >
                <Perry tieneSombrero={tieneSombrero}   ></Perry>
            </Titulo>
            <Boton onClick={ponerSombrero} nombreBoton={textoBoton} ></Boton>

            <ul>
                {inventos.map((inventoItem, indice) => (
                    <ElementoLista key={indice} texto={inventoItem}></ElementoLista>
                ))}

            </ul>
        </div>
    )
}

export default Practica