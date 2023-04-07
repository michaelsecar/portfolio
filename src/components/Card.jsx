import "./Card.css"
import { GitHub } from "../components/Icons"

const Card = ({ title, description, image, alt = "undefined" }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-source">
          <a href="https://github.com/FanFaRoNoObSkY" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="card-description">{description}</div>
      <img className="card-image" src={image} alt={alt} />
    </div>
  )
}

export default Card
