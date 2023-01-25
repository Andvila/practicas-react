import React, {Component} from "react";

export default class Padre extends Component {

    state = {
        contador: 0
    }

    incrementarContador = e => {
        this.setState({
            contador: this.state.contador + 1
        });
    }
    
    render() {
        return(
            <>
                <h2>Comunicación entre Componentes</h2>
                <p>Contador: { this.state.contador }</p>
                <Hijo parentEvent={this.incrementarContador} msg="Mensaje al hijo 1"/>
                <Hijo parentEvent={this.incrementarContador} msg="Mensaje al hijo 2"/>
            </>
        )
    }
}

function Hijo(props) {
    return(
        <>
            <h3>{props.msg}</h3>
            <button onClick={props.parentEvent}>+</button>
        </>
    )
}