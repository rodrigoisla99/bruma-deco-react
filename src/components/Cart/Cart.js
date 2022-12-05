import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../Context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc  } from "firebase/firestore";
import moment from "moment";

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
            alert(`Orden creada con el id ${response.id}`)
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

    return (
    <div>
        {cart.map((product) => (
            <div key={product.id}>
                <img className="image-cart" alt={product.title} src={`/assets/${product.imageId}`}/>
                <h2 className="name-cart">{product.title}</h2>
                <h2 className="price-cart">{product.price}</h2> 
                <h2>{product.quantity}</h2>
            </div>
        ))}
        <div>
            <h1>Total: {total}</h1>
            <button onClick={createOrder}>Finalizar compra</button>
            <div>
                <h2>Formulario</h2>
                <input name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}></input>
                <input name="phone" type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange}></input>
                <input name="email" type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}></input>
            </div>
        </div>
    </div>) 
}

export default Cart;