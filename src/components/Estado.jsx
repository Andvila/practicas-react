import React, { Component } from "react";

function EstadoAHijo(props) {
    return (
        <div>
            <h2>{ props.contadorHijo }</h2>
        </div>
    );
}

export default class Estado extends Component {

    constructor(props) {
        super(props);
        
        // Definimos la propiedad que contiene los estados del componente
        this.state = {
            contador: 0
        };

        setInterval(
            /* Para cambiar el estado de un componente se debe utilizar el setState ya que como
            el estado es inmutable react lo que hace con el setState es crear una variable
            nueva y reemplazarla y reenderiza de nuevo el componente */
            () => this.setState({
                contador: this.state.contador + 1
            }),
            1000
        );
    }

    render() {
        return(
            <div>
                <h2>El State</h2>
                <p>{ this.state.contador }</p>
                <EstadoAHijo contadorHijo={ this.state.contador } />
            </div>
        );
    }

}