import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../Context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc  } from "firebase/firestore";
import "./Cart.css"
import moment from "moment";
import swal from "sweetalert"
import Table from 'react-bootstrap/Table';


const Cart = () => {
    const {cart} = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState ({
        name: "",
        phone: "",
        email: "",
    });

    const getTotalPrice = () => {
        setTotal(cart.reduce((acc, product)=> acc + product.price * product.quantity, 0)) 
    };

    const createOrder = ()=>{
        const db = getFirestore()
        const query = collection(db, "order")
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email
            },
            date: moment().format("DD/MM/YYYY"),
            items: cart,
            total: total,
        };
        addDoc(query,newOrder)
        .then((response)=> {
            swal(
                {
                    title: `Orden creada con el id ${response.id}`,
                    text: "Te enviaremos un mail con el detalle",
                    icon: "success",
                    button: "Aceptar"
                }
                )
            return(response)
        })
        .then((res) => {
            cart.forEach(product => {
                const query = doc(db, "products", product.id);
                updateDoc(query, {
                    stock: product.stock - product.quantity,
                })
            });
            const orderDoc = doc (db, "products")
        })
        .catch((error)=> console.log(error))
    }

    useEffect(() => {
        getTotalPrice()
    }, [cart]);

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        })
    }

    const {clear} = useContext(cartContext)

    return (
    <div>
        <hr/>
        {cart.map((product) => (
            <Table striped bordered hover className="probando">
      <thead>
        <tr>
          <th>Cant</th>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.quantity} </td>
          <td><img className="image-cart-table" alt={product.title} src={`/assets/${product.imageId}`}/></td>
          <td>{product.title}</td>
          <td>${product.price}</td>
        </tr>
      </tbody>
    </Table>
        ))}

        <div>

            <div className="clear-cart">
                <button onClick={clear} className="add-cart">Vaciar Carrito</button>
            </div>
        
            <div className="form-compra">
                <h2 className="datos-form">Completá tus datos para finalizar la compra</h2>
                <input className="input-compra" name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}></input>
                <input className="input-compra" name="phone" type="text" placeholder="Teléfono" value={formValues.phone} onChange={handleInputChange}></input>
                <input className="input-compra" name="email" type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}></input>
            </div>

            <h1 className="total">Total: ${total}</h1>
            
            <div className="finalizar-compra">
                <button onClick={createOrder} className="add-cart">Finalizar compra</button>
            </div>
        </div>
    </div>) 
}

export default Cart;