import '../styles/Partners.css';
import { useState } from "react";
import Gold_Fields from '../imgs/Gold_Fields.png';
import Newmont from '../imgs/Newmont.png';
import Pacosa from '../imgs/Pacosa.png';
import Stracon from '../imgs/Stracon.png';

const Partners = () => {
    return (
        <div className ='partners-container' id = 'clientes-id'>
            <h2>NUESTROS <span style ={{color: '#812990'}}>CLIENTES</span></h2>
            <div className = 'partners'>
                    <div>
                        <img src = {Gold_Fields}></img>
                    </div>
                    <div>
                        <img src = {Newmont}></img>
                    </div>
                    <div>
                        <img src = {Pacosa}></img>
                    </div>
                    <div>
                        <img src = {Stracon}></img>
                    </div>
            </div>
        </div>
    );
}

export default Partners;