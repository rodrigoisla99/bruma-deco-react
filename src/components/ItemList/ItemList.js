import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({productList}) => {
    return (
        //    ACA DEBERIA PONERLE EL DISPLAY FLEX - VER MINUTO 59 DEL AFTER
        <div className="container-carts">
            {productList.map((product) => (
            <Item key={product.id} producto={product} />
         ))} 
        </div>
       
    );
};

export default ItemList;