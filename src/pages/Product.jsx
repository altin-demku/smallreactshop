import BaseLayout from "../layout/Base";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router";
import {CartContext} from "../context/Cart";

export default function Product() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        var product = {
            id: data.id,
            title: data.title,
            image: data.thumbnail,
            cost: data.price,
            quantity: e.target.quantity.value,
        }
        setCart([...cart, product]);
    }


    return (
        <BaseLayout>
            <Link to={"/products"}>Back</Link>
            <div className={"flex max-w-screen-lg mx-auto"}>
                <div className={"w-1/3"}>

                    <img src={ data.thumbnail} />
                </div>
                <div className={"w-2/3"}>
                    <h1 className={"text-4xl font-bold"}>{data.title}</h1>
                    <h2 className={"mb-3"}>von <span className={"font-bold"}>{data.brand}</span></h2>
                    <p className={"text-2xl mb-3"}>{data.price}</p>
                    <p>{data.description}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={"p-2 border border-black mr-2"}
                            type={"number"}
                            name={"quantity"}
                        />
                        <button className={"p-2 border border-black"} type="submit">In den Warenkorb</button>
                    </form>
                </div>
            </div>
        </BaseLayout>
    );
}