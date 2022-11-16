import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({producto}) => {
    return(
        <Link to={`item/${producto.id}`}>
            <div className="products-carts">
                <img className="image-cart" alt={producto.nombre} src={`${producto.img}`}/>
                <h2 className="name-cart">{producto.nombre}</h2>
                <h2 className="price-cart">${producto.precio}</h2> 
                <button className="add-cart">Agregar al carrito</button>
            </div>
        </Link>    
    )
};

export default Item;