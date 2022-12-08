import './style.css'
import logo from '../background.jpeg'

export function Card(props) {
  return (
    <>
    <div className="card">
      <div className="image-card">
        <img src={logo} alt="" />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <button>Add to card</button>
      </div>
    </div>
    </>
  )
}