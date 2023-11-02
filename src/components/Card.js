import { Link } from "react-router-dom"

export const Card = (prop) => {
    return (
       <div className="card">
       <Link to={`/products/${prop.product.id}`}>
        <h4>{prop.product.title}</h4>
        <img src={prop.product.image} alt={prop.product.title} />
        </Link>
      </div>
     
    )
  }
  
  
  export default Card