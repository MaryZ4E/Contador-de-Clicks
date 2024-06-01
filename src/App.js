// Importa los estilos CSS para la aplicación desde el archivo "App.css"
import "./App.css";

// Importa el componente Boton desde el archivo "./componentes/Boton.js"
import Boton from "./componentes/Boton";

// Importa el componente Contador desde el archivo "./componentes/Contador.js"
import Contador from "./componentes/Contador";

// Importa la imagen del logo de freeCodeCamp desde el archivo "./imagenes/freecodecamp-logo.png"
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

// Importa el hook useState desde React para gestionar el estado local en la aplicación
import { useState } from "react";

// Define el componente funcional principal de la aplicación
function App() {
  // Define el estado local "numClics" y la función "setNumClics" para actualizar dicho estado
  const [numClics, setNumClics] = useState(0);

  // Define la función "manejarClic" que se ejecuta cuando se hace clic en el botón "Clic"
  const manejarClic = () => {
    // Incrementa el estado "numClics" en 1 cuando se hace clic en el botón "Clic"
    setNumClics(numClics + 1);
  };

  // Define la función "reiniciarContador" que se ejecuta cuando se hace clic en el botón "Reiniciar"
  const reiniciarContador = () => {
    // Restablece el estado "numClics" a 0 cuando se hace clic en el botón "Reiniciar"
    setNumClics(0);
  };

  // Renderiza los elementos de la aplicación
  return (
    //// Crea un contenedor principal con la clase "App"
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App; // Exporta el componente App como el componente predeterminado de este módulo
