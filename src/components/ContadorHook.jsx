import React, { useState } from 'react';

export default function ContadorHook (props) {

    // Se puede especificar en el useState el valor inicial
    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);

    return (
        <>
            <h2>Hook - useState</h2>
            <h3>Contador de { props.titulo }</h3>
            <p>{ contador }</p>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
        </>
    )

}

ContadorHook.defaultProps = {
    titulo: 'Clicks'
};