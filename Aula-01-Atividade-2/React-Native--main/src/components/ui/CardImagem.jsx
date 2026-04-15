// Importando o componente Button
import Button from "./Button";
import "./CardImagem.css"

//Criando o componente CardImagem
function CardImagem(props) {
    return (
        <div className="card-imagem">
            <img 
                src={props.imagem} 
                alt={props.alt} 
                className="card-img" 
            />

            <div className="card-content">
                <h2 className="card-title">{props.titulo}</h2>

                <p className="card-description">
                    {props.descricao}
                </p>
            </div>
        </div>
    );
}


export default CardImagem