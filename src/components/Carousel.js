import '../styles/Carousel.css';
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    
    
    const item1 = () => {
        return (
            <div style = {{display: 'flex'}}>
                <div className = 'service'>
                    <h3>Supervisión y Gerenciamiento</h3>
                    <p> Equipo especializado en el monitoreo y control de proyectos, nuestros servicios se enfocan en:</p>
                    <ul>
                        <li>Gerencia de la construcción, comisionamiento y puesta en marcha.</li>
                        <li>Control de Costos y Planeamiento.</li>
                        <li>Aseguramiento y Control de Calidad.</li>
                        <li>Supervisión y soporte en construcción.</li>
                        <li>Supervisión de proyectos de ingeniería conceptual, básica y de detalle</li>
                </ul>
               </div>
               <div className = 'image_service'>  
                </div>
            </div>
        );
    }
    const item2 = () => {
        return (
            <div style = {{display: 'flex'}}>
                <div className = 'image_service2'> 
                </div>
                <div className = 'service'>
                    <h3>Ingeniería</h3>
                    <p>Brindamos servicios de ingeniería multidisciplinaria en las siguientes especialidades: </p>
                    <ul>
                        <li>Civil</li>
                        <li>Concreto</li>
                        <li>Estructuras</li>
                        <li>Inspección especial de estructuras</li>
                        <li>Mecánica</li>
                        <li>Pigin</li>
                        <li>Electromecánica</li>
                        <li>Hidráulica</li>
                        <li>Instrumentación y Control</li>
                </ul>
               </div>
            </div>
        );
    }
    const items = [item1(),item2()];
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <button className="nav-button left" onClick={handlePrev}>
          <FaAngleLeft className = 'icon'></FaAngleLeft>
        </button>
        <div className="carousel-container">
          <div
            className="carousel-items"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div className="carousel-item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button right" onClick={handleNext}>
          <FaAngleRight className = 'icon'></FaAngleRight>
        </button>
      </div>
    );
}

export default Carousel;