const ItemCount = ({setCount})=> {
    return (
        <div>
            <button onClick={() => setCount((currentValue)=> currentValue + 1)}>+</button>
            <button onClick={() => setCount((currentValue)=> currentValue - 1)}>-</button>
        </div>
    )
}

export default ItemCount;