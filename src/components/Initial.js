import IMAGE1 from '../imgs/img_engineer1.jpg';
import IMAGE2 from '../imgs/img_engineer2.jpg';
import IMAGE3 from '../imgs/img_engineer3.jpg';
import { useState, useEffect, useRef } from 'react';
import '../styles/Initial.css';


const Initial = () => {
    const [index2, setIndex2] = useState(0);        // Index of panels to show
    const [changeDir, setChangeDir] = useState(true);  // Change direction left (false) / right of panels (true)
    const images = [IMAGE1, IMAGE2, IMAGE3];
    const intervalRef = useRef(null);

    let index = 1;

    const texts = [
        {
        h1: "Diseño e Ingeniería de Calidad",
        p: "Nuestros proyectos se caracterizan por su precisión",
        align: "left"
        },
        {
        h1: "Innovación Tecnológica",
        p: "Soluciones avanzadas para tus necesidades",
        align: "center"
        },
        {
        h1: "Experiencia Compartida",
        p: "Más de 20 años creando valor",
        align: "right"
        }
    ];
    const changeIndex = ( nextpanel ) => {
        if ( nextpanel - index2 === 1 || nextpanel - index2 === -2 ){
            setChangeDir(true);
            console.log("es");
        }
        else {
            setChangeDir(false);
        }
        setIndex2(nextpanel);
        if (intervalRef.current) clearInterval(intervalRef.current);
        startInterval()
    }

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setChangeDir(true);
        setIndex2((prevIndex) => (prevIndex + 1) % 3);
        }, 8000);
    };
    const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startInterval(); // restart the 10s countdown
  };

    useEffect(() => {
            startInterval();

            return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            };
                
          }, [images.length]);
    return (
        <header id = "inicio-id"> 
            <div className = 'container-image'>
                <img
                    src = {IMAGE1} 
                    alt="Desvanecimiento"
                    style = {{
                        width: '100vw',
                        height: '100vh',
                        filter: 'brightness(40%)',
                        position: 'absolute',
                        objectFit: 'cover',
                        transition: 'left 2s ease-in-out',
                        left: index2 === 0 ? '0px': index2 === 1 ? '-100vw' : '100vw',
                        opacity: (index2 === 1 && changeDir) || (index2 === 2 && !changeDir) || index2 === 0 ? 1 : 0
                    }}
                />
                <img
                    src = {IMAGE2} 
                    alt="Desvanecimiento"
                    style = {{
                        width: '100vw',
                        height: '100vh',
                        filter: 'brightness(40%)',
                        position: 'absolute',
                        objectFit: 'cover',
                        transition: 'left 2s ease-in-out', 
                        left: index2 === 0 ? '100vw': index2 === 1 ? '0px' : '-100vw',
                        opacity: (index2 === 2 && changeDir) || (index2 === 0 && !changeDir) || index2 === 1 ? 1 : 0
                    }}
                />
                <img
                    src = {IMAGE3} 
                    alt="Desvanecimiento"
                    style = {{
                        width: '100vw',
                        height: '100vh',
                        filter: 'brightness(40%)',
                        position: 'absolute',
                        objectFit: 'cover',
                        transition: 'left 2s ease-in-out',
                        left: index2 === 0 ? '-100vw': index2 === 1 ? '100vw' : '0px',
                        opacity: (index2 === 0 && changeDir) || (index2 === 1 && !changeDir) || index2 === 2 ? 1 : 0
                    }}
                />
                <div className = "title-box-initial">
                    <h1 className = 'animate1'
                        style = {{
                            textAlign: 'left', '--mode': index2 === 0 ? 'slideLeft' : 'slideRight' 
                        }}
                    >{texts[0].h1}</h1>
                    <p className = 'animate1'
                            style = {{
                            textAlign: 'left','--delay': 0.3, '--mode': index2 === 0 ? 'slideLeft' : 'slideRight',
                            opacity: index2 === 0 ? 0 : 1
                        }}
                    >{texts[0].p}</p>
                    <div style = {{
                            margin: '0'
                        }}
                    ></div>
                </div>
                <div className = "title-box-initial">
                    <h1 className = 'animate2'
                        style = {{
                            textAlign: 'center','--mode': index2 === 1 ? 'slideUp' : 'slideDown' 
                        }}
                    >{texts[1].h1}</h1>
                    <p className = 'animate2'
                        style = {{
                            textAlign: 'center','--delay': 0.3, '--mode': index2 === 1 ? 'slideUp' : 'slideDown',
                            opacity: index2 === 1 ? 0 : 1
                        }}
                    >{texts[1].p}</p>
                    <div style = {{
                            margin: '0 auto'
                        }}
                    ></div>
                </div>
                <div className = "title-box-initial">
                    <h1 className = 'animate3'
                        style = {{
                            textAlign: 'right', '--mode': index2 === 2 ? 'opacityUp' : 'opacityDown' 
                        }}
                    >{texts[2].h1}</h1>
                    <p className = 'animate3'
                        style = {{
                            textAlign: 'right','--delay': 0.3, '--mode': index2 === 2 ? 'opacityUp' : 'opacityDown', 
                            opacity: index2 === 2 ? 0 : 1
                        }}
                    >{texts[2].p}</p>
                    <div style = {{
                            margin: '0 0 0 auto'
                        }}
                    ></div>
                </div>
                <div className='button-wrapper'>
                    <button className = "rectangle" onClick={() => changeIndex(0)}></button>
                    <button className = "rectangle" onClick={() => changeIndex(1)}></button>
                    <button className = "rectangle" onClick={() => changeIndex(2)}></button>
                </div>
            </div>
        </header>
    );
}

export default Initial;