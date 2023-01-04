import '../../assets/scss/card.css'
import logo from '../../assets/images/background.jpeg'

export function Card(props) {
  return (
    <>
    <div className="card">
      <div className="image-card">
        <img onClick={props.onClick} src={props.img ? props.img : logo} alt="" />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="price">
        <div className="price-text"><p>{props.price}</p></div>
        <div className="unit"><p>$</p></div>
      </div>
      <div className="bottom">
        <button>Add to card</button>
      </div>
    </div>
    </>
  )
}