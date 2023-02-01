import React from 'react';
import '../styles/Poemario.css';

function Poemario() {
    return ( 
        <div className='contenedor-poemario'>
            <h3 className='autor'>Autor de hermosos versos</h3>
            <h4 className='poemario'>
                el amor es un perro rabioso <span>(2023)</span>
            </h4>
        </div>
     );
}

export default Poemario;