import React from 'react';
import './Comida.css';

function Comida(props) {




    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <div className='ordenInfo'>
                    <p className="calorias">Calorias: <b>{props.calorias}</b></p>
                    <p className='precio'>Precio: <b> {props.precio} </b></p>
                </div>
            </div>
        </div>
    )
}

export default Comida