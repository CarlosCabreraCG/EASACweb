import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import BoxProject from '../components/BoxProject';
import Band from '../components/Band';
import Initial from '../components/Initial';


import Image_lateral from '../imgs/lateral_img.png';
import Project1 from '../imgs/Project1.png'
import Project2 from '../imgs/Project2.png'
import Project3 from '../imgs/Project3.png'
import { FaHardHat } from "react-icons/fa";

import '../styles/Home.css';

const Home = () => {  
    const [scrollY, setScrollY] = useState(0);

    const navigate = useNavigate();

    const navigateInfo = () => {
        window.scroll(0,0);
        navigate('/Info');
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(400 - window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
       
      }, []);

    return(
        <div>
            <Navbar></Navbar>
            <Initial></Initial>
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
                <Band/>
                <div className = 'project-section' id = "proyectos-id">
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
                <Partners/>
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