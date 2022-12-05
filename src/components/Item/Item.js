import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({producto}) => {
    return(
        <Link to={`item/${producto.id}`}>
            <div className="products-carts">
                <img className="image-cart" alt={producto.title} src={`/assets/${producto.imageId}`}/>
                <h2 className="name-cart">{producto.title}</h2>
                <h2 className="price-cart">${producto.price}</h2> 
                <h2>Disponibles: {producto.stock}</h2>
                <button className="add-cart">Agregar al carrito</button>
            </div>
        </Link>    
    )
};

export default Item;