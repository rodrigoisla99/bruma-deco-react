import "./Item.css"

const Item = ({producto}) => {
    return(
            <div className="products-carts">
                <img alt={producto.nombre} src={`../../assets/${producto.img}`}/>
                <h2>{producto.nombre}</h2>
                <h2>${producto.precio}</h2> 
                <button className="add-cart">Agregar al carrito</button>
            </div>
    )
};

export default Item;