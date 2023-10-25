import logo from './imagenes/tareas-logo.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

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
        <h1>My To Do List</h1>
      <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
