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

// const ItemList = ({setItems}) => {
//     return (
//         //    ACA DEBERIA PONERLE EL DISPLAY FLEX - VER MINUTO 59 DEL AFTER
//         <div className="container-carts">
//             {setItems.map((items) => (
//             <Item key={items.id} producto={items} />
//          ))} 
//         </div>
       
//     );
// };

export default ItemList;