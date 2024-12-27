import '../styles/Spinner.css';
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Gold_Fields from '../imgs/Gold_Fields.png';
import Newmont from '../imgs/Newmont.png';
import Pacosa from '../imgs/Pacosa.png';
import Stracon from '../imgs/Stracon.png';

const Spinner= () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    
    
    const item1 = () => {
        return (
            <div>
                <img src = {Gold_Fields}></img>
            </div>
        );
    }
    const item2 = () => {
        return (
            <div>
                <img src = {Newmont}></img>
            </div>
        );
    }
    const item3 = () => {
        return (
            <div>
                <img src = {Pacosa}></img>
            </div>
        );
    }
    const item4 = () => {
        return (
            <div>
                <img src = {Stracon}></img>
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
        <div className ='spinner-container'>
            <h2>NUESTROS <span style ={{color: '#812990'}}>CLIENTES</span></h2>
            <div className = 'spinner'>
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

export default Spinner;