import './styles.css'

// Necessário resgatar a propriedade de cada cartão para renderizar o cartão com as propriedades informadas lá no index.jsx do pages/home
export function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}