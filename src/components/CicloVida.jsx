import React, {Component} from "react";

class Reloj extends Component {

    componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM");
    }

    render() {
        return <h3>{ this.props.hora }</h3>;
    }
}

export default class CicloVida extends Component {
    
    constructor(props){
        super(props);
        console.log(0, "El componente se inicializa, aun NO está en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;
    }

    /* Cuando se hacen peticiones a API se recomienda hacerlo desde este metodo ya que en el
    render el componente aun no se encuentra en el DOM (se ejecuta despues del render) */
    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    tictac = () => this.temporizador = setInterval(
            () => this.setState({
                hora: new Date().toLocaleTimeString()
            })
        );

    iniciar = () =>  {
        this.tictac()
        this.setState({
            visible: true
        });
    }; 

    detener = () => { 
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        });
    }
    
    render() {
        console.log(4, "El componente se dibuja (o redibuja) por algún cambio en el DOM");
        return (
            <>
                <h2>Ciclo de Vida</h2>
                { this.state.visible && <Reloj hora={this.state.hora} /> }
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        );
    }
}