import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import BoxProject from '../components/BoxProject';
import Band from '../components/Band';

import IMAGE1 from '../imgs/img_engineer1.jpg';
import IMAGE2 from '../imgs/img_engineer2.jpg';
import IMAGE3 from '../imgs/img_engineer3.jpg';
import Image_lateral from '../imgs/lateral_img.png';
import Project1 from '../imgs/Project1.png'
import Project2 from '../imgs/Project2.png'
import Project3 from '../imgs/Project3.png'
import { FaHardHat } from "react-icons/fa";

import '../styles/Home.css';

const Home = () => {  
    const images = [IMAGE1, IMAGE2, IMAGE3];
    const [scrollY, setScrollY] = useState(0);
    const [fade, setFade] = useState(true);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);
    const navigate = useNavigate();

    let index = 1;

    const navigateInfo = () => {
        window.scroll(0,0);
        navigate('/Info');
    }

    useEffect(() => {
        const interval = setInterval(() => {
          switch (index){
            case 0:
                index += 1;
                setFade(true);
                setFade3(false);
                break;
            case 1:
                index += 1;
                setFade2(true);
                setFade(false);
                break;
            case 2:
                index = 0;
                setFade3(true);
                setFade2(false);
                break;
          }

        }, 8000);
        const handleScroll = () => {
            setScrollY(400 - window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
        };
       
      }, [images.length]);

    return(
        <div>
            <Navbar></Navbar>
            <header > 
                <div className = 'container-image'>
                    <img
                        src = {IMAGE1} 
                        alt="Desvanecimiento"
                        style = {{
                            width: '100%',
                            height: '100vh',
                            filter: 'brightness(40%)',
                            position: 'absolute',
                            left: '0',
                            objectFit: 'cover',
                            transition: 'opacity 2s ease-in-out', 
                            opacity: fade ? 1 : 0, 
                        }}
                    />
                    <img
                        src = {IMAGE2} 
                        alt="Desvanecimiento"
                        style = {{
                            width: '100%',
                            height: '100vh',
                            filter: 'brightness(40%)',
                            position: 'absolute',
                            left: '0',
                            objectFit: 'cover',
                            transition: 'opacity 2s ease-in-out', 
                            opacity: fade2 ? 1 : 0, 
                        }}
                    />
                    <img
                        src = {IMAGE3} 
                        alt="Desvanecimiento"
                        style = {{
                            width: '100%',
                            height: '100vh',
                            filter: 'brightness(40%)',
                            position: 'absolute',
                            left: '0',
                            objectFit: 'cover',
                            transition: 'opacity 2s ease-in-out', 
                            opacity: fade3 ? 1 : 0, 
                        }}
                    />
                    <div className = "title-box">
                        <h1>Diseño e Ingeniería de Calidad</h1>
                        <p>Nuestros proyectos se caracterizan por su precisión</p>
                    </div>
                   
                </div>
            </header>
            <section> 
                    <div className = 'flex-blue'>
                        <div className='box-left'>
                            <h2><FaHardHat className = 'textIcon'/> ACERCA DE <span style ={{color: '#812990'}}>EA</span>CE</h2>
                            <p>EACE inició sus operaciones en 2014, 
                                ofreciendo servicios de consultoría en ingeniería, 
                                construcción, supervisión y gerencia de proyectos 
                                en general.
                            </p>
                            <p> 
                                EACE está conformado por un equipo 
                                profesional con amplia experiencia, tanto en 
                                ingeniería como en construcción, quienes desarrollan 
                                los proyectos con todo el know-how para cumplir con 
                                nuestros clientes en alcance, tiempo, costo y calidad
                            </p>
                            <button onClick = {() => navigateInfo()}>CONOCE MÁS</button>
                        </div>
                        <div className='box-right'>
                            <img src = {Image_lateral} style = {{
                                transform: `translateX(${Math.max(scrollY, 0)}px)`,
                                filter: `opacity(${Math.max(-(scrollY-500)/6, 0)}%)`,
                                width: '380px'
                            }}/>
                        </div>
                    </div>
                    <Carousel/>
                    <Spinner/>
                    <Band/>
                    <div className = 'project-section'>
                        <h2>NUESTROS <span style ={{color: '#812990'}}>PROYECTOS</span></h2>
                        <div className = 'project-container'>
                        <BoxProject 
                            img = {Project1} 
                            title = 'Minera Gold Fields La Cima S.A.' 
                            text = 'holllaaaaa'/>
                        <BoxProject 
                            img = {Project2} 
                            title = 'Minera Yanacocha S.R.L.' 
                            text = 'holllaaaaa'/>
                        <BoxProject 
                            img = {Project3} 
                            title = 'Stracon S.A.' 
                            text = 'Estudios de mecánica'/>
                        </div>
                    </div>
                    <ContactForm/>
            </section>
            
            <footer>
                <p>&copy; 2024. EA CONSULTING ENGINEERS S.A.C. Todos los derechos reservados</p>
            </footer>
        </div> 
    );
}
export default Home;

/*                 */