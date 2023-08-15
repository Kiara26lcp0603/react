import "./Titulo.css";

// los props son un paquete de todas las propiedades de etiqueta

function Titulo (props){

    function agente(tieneSombrero){
  
        if(tieneSombrero === true) {
          return(<h2>Perry el ornitorrico</h2>)
        }else{
          return(<h2>un ornitorrico</h2>)
        }
        }

    return (
        <div>
            <div>{agente(props.tieneSombrero ) } </div>
            <div>{props.children}</div>
        </div>
    );
}

export default Titulo