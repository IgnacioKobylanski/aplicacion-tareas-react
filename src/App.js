import logo from './imagenes/tareas-logo.png';
import './App.css';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="App">
      <div className='titulo-contenedor'>
        <img
        src={logo}
        className='tareas-logo'
        alt='logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto={'Aprender React'}/>
      </div>
    </div>
  );
}

export default App;
