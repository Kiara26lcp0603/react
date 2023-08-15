import React from 'react';
import { useState } from 'react';
import "./Navegacion.css"


function Navegacion(props) {

    const [cerrarSesion, setCerrarSesion] = useState(false);

    const [btn, setbtn] = useState("iniciar Sesion")

    let texto = "";

    function cambiarSesion() {
        setCerrarSesion(!cerrarSesion);

        if (!cerrarSesion) {
            texto = "iniciar Sesion"
            setbtn("iniciar Sesion")
        } else {
            texto = "cerrar Sesion"
            setbtn("cerrar Sesion")
        }
    }

const [inputValue, setInputValue] = useState ("");

function search(event) {
    event.preventDefault();
    props.searchFood(inputValue);
}

function inputChange(event) {
    setInputValue(event.target.value);
}

function detectarTecla(event){

if (event.key === "Enter" || event.keyCode === 13){
    search(event);
}
}


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button id="btnclase" onClick={cambiarSesion} type="button" >
                    {btn}
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>


                    </div>
                    {/* input buscar comida */}
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            { props.searchFood ? (
                                <>
                            <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            onKeyDown={detectarTecla}
                            onChange={inputChange}
                            value={inputValue}
                            maxLength={1}
                            />
                             <button className="btn btn-outline-success" 
                             type="button">Search</button>
                             </>
                            ) : (
                            <></>
                        )}
                           
                        </form>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navegacion