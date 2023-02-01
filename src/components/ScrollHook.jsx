import React, { useState, useEffect } from "react";

export default function ScrollHook() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        console.log("Moviendo el scroll");

        const detectarScroll = () => {
            setScrollY(window.scrollY);
        }

        /* Cada vez que se haga scroll se va a actualizar el estado de scrollY por lo que el
        el componente de renderiza y se llama al useEffect
        */
        window.addEventListener('scroll', detectarScroll);
    });

    /* Se pueden tener tantos useEffect como se quieran este useEffect se llama solo cuando
     se actualiza el estado de scrollY
    */
    useEffect(() => {
        console.log("Fase de actualizacion");
    }, [scrollY]);

    /* Si se dejan los corchetes vacios el useEffect se ejecutara solo una vez */
    useEffect(() => {
        console.log("Fase de montaje");
    }, []);

    /* Cuando un useEffect regresa una funcion React lo toma como la fase de desmontaje */
    useEffect(() => {
        return () => {
            console.log('Fase de desmontaje');
        };
    });

    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )

}