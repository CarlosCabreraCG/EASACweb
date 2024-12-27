import { useState } from 'react';
import '../styles/ContactForm.css';
import { 
    BiLogoFacebookCircle, 
    BiLogoLinkedinSquare, 
    BiLogoWhatsapp, 
    BiLogoInstagram, 
    BiLogoGmail,
    BiUser,
    BiCalendar } from 'react-icons/bi'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const sendgmail = () => {
        return;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <div className = 'ContactForm' id = 'targetForm'>
            <div className = 'ContactBox' style ={{
                 width: '310px'
            }}>
                <h3>INFORMACIÓN</h3>
                <h4><BiUser className = 'iconInfo'/><span>Gerencia</span></h4>
                <p>Edgar Franklin Gallardo Asencio</p>
                <h4><BiCalendar className = 'iconInfo'/><span>Horario de atención</span></h4>
                <p>Lunes a sábado 8:00 - 18:00</p>
            </div>
            <div className = 'ContactBox2' style ={{
                 width: '400px'
            }}>
                <h3>CONTACTANOS</h3>
                <ul>
                <li><a href = 'https://www.facebook.com/EACE.ingenieria'
                target="_blank">
                <BiLogoFacebookCircle className = 'iconSocial' id ='FB'/>
                <span id = 'FBspan'>facebook.com/EACE.ingenieria</span></a></li>
                <li><a href = 'https://wa.me/51954771739'
                target="_blank">
                <BiLogoWhatsapp className = 'iconSocial' id ='WPP'/>
                <span id = 'WPPspan'>+51 954 771 739</span></a></li>
                <li><a href = 'https://www.instagram.com/eace.ingenieria/'
                target="_blank">
                <BiLogoInstagram className = 'iconSocial' id ='IG'/>
                <span id = 'IGspan'>instagram.com/eace.ingenieria</span></a></li>
                <li><a href = 'https://www.linkedin.com/company/eaecm/'
                target="_blank">
                <BiLogoLinkedinSquare className = 'iconSocial' id ='LI'/>
                <span id = 'LIspan'>linkedin.com/company/eaecm</span></a></li>
                <li><a href = 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxvLwflqSpkRSpJrWzbPkdtGsnlGjVljHBxblGSmTczFJZwVDTmXSbtHlmhvzFpRdPSq'
                target="_blank">
                <BiLogoGmail className = 'iconSocial' id = 'GM'/>
                <span id = 'GMspan'>Contacto@eace.com.pe</span></a></li>
                </ul>
            </div>
            <div className = 'ContactBox' style ={{
                 width: '400px'
            }}>
                <h3 style = {{textAlign: 'start'}}>ENVIAMOS UN CORREO</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Nombre'
                    />
                    <input
                        type="email"
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                        required
                        placeholder='Correo'
                    />
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        placeholder='Teléfono'
                    />
                    <textarea
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder='Mensaje'
                    />
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;