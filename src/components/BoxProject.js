import '../styles/BoxProject.css';
const BoxProyect = (props) => {

    return (
        <div className = 'BoxProject'>
            <div className = 'img-container-project'>
                <img src = {props.img}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default BoxProyect;