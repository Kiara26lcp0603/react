import "./Elemento-lista.css";

function ElementoLista(props) {
    return (
        <li className="li-lista" >
            {props.texto} </li>
    );
}

export default ElementoLista