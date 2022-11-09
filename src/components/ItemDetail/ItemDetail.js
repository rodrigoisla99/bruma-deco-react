const ItemDetail = ({product}) => {
    return (
<div>
    <h1>{product.nombre}</h1>
    <h1>{product.precio}</h1>
</div>
    )
}

export default ItemDetail