import React from "react";
import PropTypes from 'prop-types';

/* Las propiedades son atributos que se le pasan a los componentes, estos atributos son 
inmutables por lo que no se pueden modificar, se acceden a ellos por medio de la propiedad
props.
*/
export default function Propiedades(props) {
    return (
        <div>
            <h2>{ props.porDefecto  }</h2>
            <ul>
                <li>{ props.numero }</li>
                <li>{ props.cadena }</li>
                <li>{ props.boolean ? 'true' : 'false' }</li>
                <li>{ props.arreglo.join(', ') }</li>
                <li>{ props.objeto.nombre + ' - ' + props.objeto.correo }</li>
                <li>{ props.elementoReact }</li>
                <li>{ props.arreglo.map(props.funcion).join(', ') }</li>
                <li>{ props.componenteReact }</li>
            </ul>
        </div>
    )
}

// Con esto podemos definir valores por defecto para las propiedades del componente
Propiedades.defaultProps = {
    porDefecto: "Propiedad por defecto"
}

/* Con la libreria prop-types forzamos el tipo de dato de las propiedades del componente
y otros atributos, como si es una propiedad obligatoria
*/
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}