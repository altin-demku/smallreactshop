import { Link } from "react-router";

export default function Product(props) {
    const product = props.product;

    return (
        <div className="product w-1/4 p-5">
            <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt="Product" />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p>{product.description}</p>
                <p className="text-gray-500">{product.price}</p>
            </Link>
        </div>
    )
}