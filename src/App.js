import logo from './imagenes/tareas-logo.png';
import './App.css';

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
    </div>
  );
}

export default App;
