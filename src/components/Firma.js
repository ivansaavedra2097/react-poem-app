import React from 'react';
import '../styles/Firma.css';

function Firma(props) {
    return ( 
        <div className='contenedor-firma'>
            <h1 className={`by-${props.author}`}>
                {`by ${props.author}`}
            </h1> 
        </div>
     );
}

export default Firma;