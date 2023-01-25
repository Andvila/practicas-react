import React, {Component} from "react";

export default class CicloVida extends Component {
    
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aun NO está en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString()
        }

        this.temporizador = null;
    }

    tictac = () => this.temporizador = setInterval(
            () => this.setState({
                hora: new Date().toLocaleTimeString()
            })
        );

    iniciar = () =>  this.tictac(); 

    detener = () => clearInterval(this.temporizador)
    
    render() {
        console.log(4, "El componente se dibuja (o redibuja) por algún cambio en el DOM");
        return (
            <>
                <h2>Ciclo de Vida</h2>
                <h3>{ this.state.hora }</h3>
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        );
    }
}