import React from 'react';
import Poemario from './Poemario';
import PoemaBtn from './PoemaBtn';
import '../styles/Poema.css';

function Poema() {
    return ( 
        <div id='contenedor-poema'>
            <h1 className='titulo'>Soy el titulo del Poema</h1>
            <p className='estrofa'>
                Soy un verso de esos chingones <br/>
                de los que no necesita a ninguno <br/>
                ninguno de esos bastardos <br/>
                llamados hombres
            </p>
            <p className='estrofa'>
                Aqui empieza la segunda estrofa<br/>
                ni que fuera esta, cancion de segunda<br/>
                porque si acaso, amor mio, le hicieras mofa<br/>
                directo a la tumba te iras iracunda.
            </p>
            <p className='estrofa'>
                No se que es una rima, ni un terceto<br/>
                y sin embargo, amor, te revelare mi plan <br/>
                en cuanto te agaches, te picare el aniceto.
            </p>
            <p className='estrofa'>
                Aqui me despido, amigos y amores<br/>
                les dejare la impresion de escribir un soneto<br/>
                me desaparecere a la una, a las dos y a las tres.
            </p>
            <div className='footer-poema'>
                <Poemario />
            </div>
            <div className='botones'>
                <PoemaBtn type='last'/>
                <PoemaBtn type='random'/>
                <PoemaBtn type='next' />
            </div>
        </div>
     );
}

export default Poema;