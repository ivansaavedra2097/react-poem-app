import React from 'react';
//icons 5 react-icons
import { IoCaretBack,IoCaretForwardSharp, IoDice} from "react-icons/io5";
//estilo
import '../styles/PoemaBtn.css';

function PoemaBtn(props) {
    
    const btn_icons = [<IoCaretBack />, <IoDice />,<IoCaretForwardSharp />];
    let btn_indx = 0;

    switch(props.type){
        case 'last': btn_indx = 0; break;
        case 'random': btn_indx = 1; break;
        case 'next': btn_indx = 2; break;
        default: btn_indx = 0
    }

    return ( 
        <button className={`btn ${props.type}`}>
           {btn_icons[btn_indx]}
        </button>
     );
}

export default PoemaBtn ;