import '../styles/Navbar.css';
import Image from '../imgs/EACE_LOGO.png';
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const interOpenDiv = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className = 'nav-container'> 
            <nav style ={{
                backgroundColor: window.scrollY ? '#15284b': 'rgb(0,0,0,0)'
            }}>
                <img src = {Image} onClick={() => navigate('/Home')}/>
                <div className = "buttons-wrapper-navbar">
                    <Link to="inicio-id" smooth={true} duration={500}>
                        <button id = 'Inicio'>Inicio</button>
                    </Link>
                    <Link to="servicios-id" smooth={true} duration={500}
                    offset={-80}>
                        <button className = 'button_hid' >Servicios</button> 
                    </Link>
                    <Link to="proyectos-id" smooth={true} duration={500}
                    offset={-100}>
                        <button className = 'button_hid' >Proyectos</button>
                    </Link>
                    <Link to="clientes-id" smooth={true} duration={500}
                    offset={-80}>
                        <button className = 'button_hid' >Clientes</button>
                    </Link>
                    <Link to="contacto-id" smooth={true} duration={500}>
                        <button className = 'button_hid '>Contacto</button>
                    </Link>
                    <button className = "display" id = 'Display' onClick={interOpenDiv}><FaAngleDown></FaAngleDown></button>
                </div>
            </nav>
            {showDropdown && (
                    <div className="dropdown">
                        <Link to="target-section" smooth={true} duration={500}>
                        <button>Servicios</button>
                        </Link>
                        <Link to="target-section" smooth={true} duration={500}>
                        <button>Proyectos</button>
                        </Link>
                        <Link to="target-section" smooth={true} duration={500}>
                        <button>clientes</button>
                        </Link>
                        <Link to="targetForm" smooth={true} duration={500}>
                        <button>Contactos</button>
                        </Link>
                    </div>
            )}
            </div>
    );
}

export default Navbar;