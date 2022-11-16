const ItemDetail = ({productSelected}) => {
    return (
<div>
    <h1>{productSelected.nombre}</h1>
    <h2>{productSelected.precio}</h2>
</div>
    )
}

export default ItemDetail