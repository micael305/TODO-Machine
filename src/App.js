import logo from './platzi.webp';
import './App.css';

function App() { //Convencion: Si la funcion empieza con mayuscula es componente de react.js
  return ( //todo los elementos dentro del return son JSX no HTML, Los JSX luego se transforman en etiquetas
    <div className="App">

    <TodoItem /> 
    <TodoItem /> 
    <TodoItem /> 

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem() { //vamos a importar este componente dentro del componente App
  return (
    <li> 
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
    /* JSX es una extensión de sintaxis para JavaScript que permite escribir código con una 
    estructura similar al HTML. Antes de que el navegador pueda interpretarlo, este código 
    JSX es transformado (transpilado) a llamadas a funciones de JavaScript que crean una 
    representación de la interfaz de usuario en la memoria (el DOM virtual). 
    Finalmente, React (u otra librería) utiliza esta representación virtual para actualizar
     de manera eficiente el DOM real que el usuario ve en el navegador. */
  );
}

export default App; //debo exportarlo para poder verlo en index.js
