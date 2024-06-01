import React from "react"; // Importa la biblioteca React
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} // Asigna la clase CSS "boton-clic" si esBotonDeClic es verdadero,
      // de lo contrario asigna la clase "boton-reiniciar"
      onClick={manejarClic} // Asigna la función manejarClic como controlador de eventos para el evento onClick del botón
    >
      {texto}
    </button>
  );
}

export default Boton; // Exporta la función Boton como el componente predeterminado de este módulo
