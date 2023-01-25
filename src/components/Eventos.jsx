import React, {Component} from "react";

export class EventosES6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };

        // Con esto hacemos que sumar tenga acceso a this
        this.sumar = this.sumar.bind(this);

        this.restar = this.restar.bind(this);

    }

    sumar(e) {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar(e) {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases version ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

// Properties Initializer
export class EventosES7 extends Component {

    state = {
        contador: 0
    };

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clases version ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

/* function Boton(props) {
    return <button onClick={props.myOnClick}>Boton hecho componente</button>
} */

const Boton = ({myOnClick}) => {
    return <button onClick={myOnClick}>Boton hecho componente</button>
}

/* const Boton = (props) => {
    return <button onClick={props.myOnClick}>Boton hecho componente</button>
} */

export class MasSobreEventos extends Component {
/*     
    handleClick = e => {
        console.log(e);
        // React hace un wrap sobre el evento nativo de JS. Para acceder a este último se usa la propiedad nativeEvent
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
    } */

    handleClick = (e, msg) => {
        console.log(e);
        // React hace un wrap sobre el evento nativo de JS. Para acceder a este último se usa la propiedad nativeEvent
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }

    render(){
        return (
            <div>
                <h2>Mas sobre Eventos</h2>
                {/* <button onClick={this.handleClick}>Saludar</button> */}
                <button onClick={ e => this.handleClick(e, 'Wololo') }>Saludar</button>
                <Boton myOnClick={ e => this.handleClick(e, 'Wololo') }/>
            </div>
        )
    }
}