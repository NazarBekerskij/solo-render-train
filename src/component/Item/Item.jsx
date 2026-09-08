function Item ({title, category, price, rating, inStock, image}) {
return(
    <li>
        <h1>{title}</h1>
        <p>{category}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{inStock ?  "в наявності" : "не в наявності"}</p>
        <img src={image} width={400} alt={title} />
    </li>
)
}

export default Item