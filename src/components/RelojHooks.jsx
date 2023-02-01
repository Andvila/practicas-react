import React, { useState, useEffect } from "react";

function Reloj({ hour }) {
    return <h3>{ hour }</h3>
}

export default function RelojHook() {

    const [ hour, setHour ] = useState(new Date().toLocaleTimeString() );
    const [ visible, setVisible ] = useState(false);

    useEffect( () => {

        let temporizador;

        if(visible) {
            temporizador = setInterval( () => {
                setHour(new Date().toLocaleTimeString() );
            }, 1000);
        } else {
            clearInterval(temporizador);
        }

        return () => {
            console.log("Fase de Desmontaje");
        }

    }, [visible]);

    return (
        <>
            <h2>Reloj con Hooks</h2>
            { visible && <Reloj hora={ hour } /> }
            <button onClick={ () => setVisible(true) }>iniciar</button>
            <button onClick={ () => setVisible(false) }>detener</button>
        </>
    )
}