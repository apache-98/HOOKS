import { useState } from 'react';
import './App.css'

function App() {

  let Count1 = 0;
  const [count2, setCount2] = useState(0);

  function handlecount (){
    Count1++
    console.log(Count1)
    setCount2(count2 + 1)

  }

  return (
    <>
    {/* hooks vamos a ver lo que son los estados y los efectos 
     useState y useEffect*/}

     {/* para trabajar con los estados siempre debemos usar constantes, */}
      <section>
        <h2>Contador JS: {Count1}</h2>
        <h2>Contador con estado:{count2}</h2>
        <button onClick={handlecount}>Incrementar</button>
        
      </section>
    </>
  )
}

export default App
