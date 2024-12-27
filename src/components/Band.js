import { MdEngineering } from "react-icons/md";
import '../styles/Band.css';
const Band = () => {
    return (
        <div className = 'band'>
            <div className = 'band-item'>
                <MdEngineering className = 'icon-band'/>
                <div className ='band-item-text'>
                    <h3>50</h3>
                    <p>50</p>
                </div>
            </div>
            <div className = 'band-item'>
                <MdEngineering className = 'icon-band'/>
                <div className ='band-item-text'>
                    <h3>50</h3>
                    <p>50</p>
                </div>
            </div>
            <div className = 'band-item'>
                <MdEngineering className = 'icon-band'/>
                <div className ='band-item-text'>
                    <h3>50</h3>
                    <p>50</p>
                </div>
            </div>
            <div className = 'band-item'>
                <MdEngineering className = 'icon-band'/>
                <div className ='band-item-text'>
                    <h3>50</h3>
                    <p>50</p>
                </div>
            </div>
        </div> 
    );
}

export default Band;