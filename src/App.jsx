
import './App.css';

import { useEffect, useState } from "react";

function App() {

  const [consejoYId, setConsejoYId] = useState({ consejo: '', idConsejo: '' });

  const cargarConsejoAleatorio = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        const consejo = data.slip.advice;
        const idConsejo = data.slip.id;

        setConsejoYId({ consejo, idConsejo });
      })
      .catch((error) => {
        console.error('Hubo un error al obtener el consejo:', error);
      });
  };

  useEffect(() => {
    cargarConsejoAleatorio();
  }, []);

  const reiniciarPagina = () => {
    window.location.reload();
  };

  return (
    <main>
      <div className='container'>


        <div className='container-p'>

          <h1 className='title'>Advice #{consejoYId.idConsejo}</h1>
          <p className='consejo' > {consejoYId.consejo}</p>


        </div>
        <svg className='soni' width="295" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" ><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        <button className='reinicio' onClick={reiniciarPagina}><i id='dices' className="fa-solid fa-dice-five fa-xl"></i></button>

      </div>
    </main>
  );




}


export default App;