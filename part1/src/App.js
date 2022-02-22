import "./App.css";
import Componente from "./Componente";

function App() {
  return (
    <div className="App">
      <h1>Primera Clase de React!</h1>
      <Componente colors="red" message="Mensaje 1" />
      <Componente colors="orange" message="Mensaje 2" />
      <Componente colors="green" message="Mensaje 3" />
    </div>
  );
}

export default App;
