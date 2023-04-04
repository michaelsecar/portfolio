
import './Card.css'

const Card = ({title, description, image, alt="undefined"}) => {
    return (
        <div className="card-container">
            <h3 className="card-title">
                {title}
            </h3>
            <div className="card-description">
                {description} 
            </div>
            <img className="card-image" src={image} alt={alt} />
        </div>
    )
}

export default Card