import logo from './logo.svg';
import './App.css';
import Componente from './components/Components';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Mensaje recibido como atributo"/>
          <hr/>
          {/* Lo que no es cadena se tiene que solocar entre {} como se ve con el valor numerico y el booleano */}
          <Propiedades 
            cadena="Esto es una cadena" 
            numero={19} 
            boolean={true} 
            arreglo={[1, 2, 3]}
            objeto={ {nombre: 'Andres', correo: 'jandvila@gmail.com'} }
            elementoReact={ <i>Esto es un elemento React</i> }
            funcion={ num => num*num }
            componenteReact={ <Componente msg="Nested component" /> }
            />
            <hr/>
            <Estado />
            <hr/>
            <RenderizadoCondicional/>
            <hr/>
            <RenderizadoElementos/>
            <hr/>
            <EventosES6/>
            <hr/>
            <EventosES7/>
            <hr/>
            <MasSobreEventos/>
            <hr/>
            <ComunicacionComponentes/>
            <hr/>
            <CicloVida/>
        </section>
      </header>
    </div>
  );
}

export default App;
