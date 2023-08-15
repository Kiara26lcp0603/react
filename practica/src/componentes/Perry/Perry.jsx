import "./Perry.css";

function Perry (props) {

    // =========================esta funcion era la que estaba en app.js==============================
    function imagen (tieneSombrero){

    
    let imagen = ""
    if(tieneSombrero === true){
      imagen = "/perry.jpg"
    }else {
      imagen = "/perry3.jpg"
    }
  
    return (<img className = "img-Perry" src = {imagen} alt="platipus" /> )
  }
  return <div> {imagen(props.tieneSombrero)}</div>;
}

export default Perry;