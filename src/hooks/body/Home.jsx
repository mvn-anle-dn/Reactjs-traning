import '../../assets/scss/home.css'
import logo from '../../assets/images/background.jpeg'
import { Card } from './Card'


export function Home() {
const product = [
  {
    'title' : 'product 1',
    'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing edit'
  },
  {
    'title' : 'product 2',
    'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing edit'
  },
  {
    'title' : 'product 3',
    'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing edit'
  },
  {
    'title' : 'product 4',
    'description' : 'Lorem ipsum dolor sit amet consectetur adipisicing edit'
  }
] 
return (
  <>
    <div className="main-home">
      <div className="image">
        <img src={logo} alt="" className="img-css" />
        <h1>Welcome to react training!</h1>
      </div>
      <div className="layout">
        <div className="component">
          <h1>Product Latest</h1>
          <div className="card-list">
           {product.map(pr => 
            <Card key = {pr.title} title = {pr.title} description = {pr.description} />
            )}
          </div>
          
        </div>
      </div>

    </div>
    
  </>
)
}