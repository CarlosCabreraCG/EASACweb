import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

import IMAGE from '../imgs/img_engineer1.jpg';
import IMAGE1 from '../imgs/lateral_img.png';
import IMAGEBACKGROUND from '../imgs/img_engineer2.jpg';
import IMAGE_STAFF from '../imgs/gerente.jpg';

import '../styles/Info.css'
import { FaAngleRight } from "react-icons/fa";
import { BiSolidBinoculars } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";


import '../styles/Home.css';

const Info = () => {  
    const [scrollY, setScrollY] = useState(0);
    const [indexdesc, setIndexDesc] = useState(0);
    const [desc, setDesc] = useState();
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

       
    }, []);
    const render_description = () => {
        switch (indexdesc) {
            case 0:
                return(
                <div className = 'description'>
                    <h3>Jefe de Proyectos</h3>
                    <p> Con 16 años de experiencia profesional como ingeniero Civil estructural, 
                        Supervisor de Proyectos, Líder de Disciplina Civil, Jefe de Supervisión de Obras. 
                        Cuenta con estudios de maestría en Gerencia de la Construcción y Gestión de 
                        proyectos PMI. Ha desarrollado proyectos para el sector minero, industrial, 
                        hidráulicos, obras viales y edificaciones. Ha laborado en Minera Yanacocha, Gold Fields, 
                        Miski Mayo y EACE.
                    </p>
                </div>);
                break;
            case 1:
                return(
                    <div className = 'description'>
                        <h3>Especialista en Hidraulica</h3>
                        <p> Con 9 años de experiencia profesional como ingeniero Civil. 
                        Cuenta con una maestría en Ingeniería Hidráulica. Ha desarrollado 
                        proyectos para el sector minero, energía agrícola y obras viales. 
                        Ha laborado en Minera San Rafael, Southern Perú, MJ & Asociados 
                        Water Resources Consulting y EACE.
                        </p>
                    </div>);
                    break;
            case 2:
                return(
                <div className = 'description'>
                    <h3>Especialista en Piping</h3>
                    <p>Con mas de 15 años de experiencia profesional como ingeniero 
                    Mecánico - Electricista especialista en Piping. Ha desarrollado proyectos 
                    para el sector minero. Experiencia en análisis de flexibilidad 
                    de ductos de hasta 15 km de longitud y líneas para estaciones de 
                    bombeo de agua y slurry. Experiencia en construcción de estructuras 
                    metálicas y montaje de equipos mineros. Ha laborado en Ausenco,
                    PSI Perú, IDICSA  y EACE.
                    </p>
                </div>);
                break;
            default:
                return(<div></div>);
                break;
        }
    }
    return(
        <div>
            <Navbar></Navbar>
            <header>
                <div className = 'container-image'>
                    <img
                        id = 'bgImage'
                        src = {IMAGE} 
                        alt="Desvanecimiento"
                    />
                    <div className = "title-box title-desc">
                        <h1>
                            <FaAngleRight className = 'textIcon'/>
                            <FaAngleRight className = 'textIcon'/>
                            Acerca de EACE
                        </h1>
                        <p>En EACE hacemos las cosas correctas de la manera correcta</p>
                    </div>
                </div>
            </header>
            <section className = 'infoSection'>
                <div className = 'flex'>
                    <div className='box-left'>
                        <BiSolidBinoculars className = 'titleIcon'/>
                        <h2 style = {{margin: '10px'}}>Mision</h2>
                        <p> Ser reconocidos como referentes 
                            en ingeniería nacional por nuestro 
                            profesionalismo  y  experiencia, 
                            desarrollando  relaciones  de  con
                            fianza con nuestros clientes. </p>
                        <TbTargetArrow className = 'titleIcon'/>
                        <h2 style = {{margin: '10px'}}>Vision</h2>
                        <p> Brindar servicios de ingeniería que 
                            cumplan con el alcance, tiempo, 
                            costo y calidad, alineados a normas 
                            nacionales e internacionales, sopor
                            tados con profesionales calificados 
                            y tecnología especializada.  </p>
                    </div>
                    <div className='box-right'>
                        <img src = {IMAGE1} style = {{
                            width: '380px'
                        }}/>
                    </div>
                </div>
                <div className = 'list-section'>
                    <img src = {IMAGEBACKGROUND}/>
                    <div class="top-gradient"></div>
                    <div className = 'list-wrap'>
                        <h2>NUESTRO EQUIPO</h2>
                        <ul>
                            <li>
                            Tenemos un capital humano con gran experiencia y un 
                            compromiso demostrado. 
                            </li>
                            <li>
                            La sinergia de nuestros talentos integrados nos permite desarrollar
                            nuestros proyectos cumpliendo con el alcance, tiempo, 
                            costo y calidad definidos con nuestros clientes. 
                            </li>
                            <li>
                            Nuestro equipo cuenta con experiencia adquirida en proyectos
                            de diversas compañías mineras, como son: Yanacocha, Miski Mayo, 
                            Gold Fields, Buenaventura, Zafranal, Atacocha, 
                            Antapacay, Chinalco, Anglo American, Milpo, Codelco - División 
                            Teniente, Antofagasta Minerals, Barrick, entre otras. 
                            </li>
                            <li>
                            Toda la experiencia adquirida por nuestro equipo profesional 
                            se pone a disposición en cada nuevo proyecto, generando 
                            oportunidades de mejora con lo cual se busca el beneficio de 
                            nuestros clientes.
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 style={{marginBottom: '50px'}}>NUESTRO STAFF PROFESIONAL</h2>
                <div className = 'bubbles-section'>
                    <div className = 'bubble'>
                        <div className = 'img-container' onClick = {() => setIndexDesc(0)}>
                            <img src = {IMAGE_STAFF}></img>
                        </div>
                        <h3>Edgar Gallardo Ascencio</h3>
                        <p>Jefe de Proyectos</p>
                    </div>
                    <div className = 'bubble'>
                        <div className = 'img-container' onClick = {() => setIndexDesc(1)}>
                            <img src = {IMAGE_STAFF}></img>
                        </div>
                        <h3>Luis Ariza</h3>
                        <p>Especialista en Hidraulica</p>
                    </div>
                    <div className = 'bubble'>
                        <div className = 'img-container' onClick = {() => setIndexDesc(2)}>
                            <img src = {IMAGE_STAFF}></img>
                        </div>
                        <h3>Carlos Gutiérrez</h3>
                        <p>Especialista en Piping</p>
                    </div>
                </div>
                <div className = 'description-container'>
                    {render_description()}
                </div>
            </section>
            
            <footer>
                <p>&copy; 2024. EA CONSULTING ENGINEERS S.A.C. Todos los derechos reservados</p>
            </footer>
        </div> 
    );
}
export default Info;

/*                 */