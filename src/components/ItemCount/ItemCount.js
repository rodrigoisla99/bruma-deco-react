const ItemCount = ({setCount})=> {
    const addItem = () => {
        setCount((currentValue) => currentValue + 1)
    };
    const removeItem = ()=>{
        setCount((currentValue)=> {
            if (currentValue > 1) {
                return currentValue -1
            } else {
                return currentValue
            }
        });
    };
    return (
        <div>
            <button onClick={(addItem)}className="add-cart">+</button>
            <button onClick={(removeItem)} className="add-cart">-</button>
        </div>
    )
}

export default ItemCount;