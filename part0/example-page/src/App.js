import { useState } from "react";

function App() {
  const [contador, setContador] = useState(1);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;
  const msg = isEven ? "Es par" : "Es impar";

  return (
    <div>
      <h1>La Pagina de Ejemplos</h1>
      <h2>Contador: {contador}</h2>
      <p> {msg} </p>
      <button onClick={handleClick}>Aumentar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
}

export default App;
