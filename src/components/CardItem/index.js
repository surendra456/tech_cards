// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-phase`}>
      <h1 className="card-head">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img className="image" src={imgUrl} alt="title" />
      </div>
    </li>
  )
}

export default CardItem
