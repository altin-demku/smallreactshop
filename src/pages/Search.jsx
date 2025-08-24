import BaseLayout from "../layout/Base";
import {useEffect, useState} from "react";
import Product from "../components/Product";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        if(searchQuery != "") {
            fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        } else {
            setData([])
        }
    }, [searchQuery]);

    return (
        <BaseLayout>
            <div class={"max-w-screen-lg mx-auto"}>
                <h1>Suche</h1>

                <form onSubmit={e => e.preventDefault()}>
                    <input
                        name="name"
                        type="text"
                        className={"border"}
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </form>

                <div className="flex flex-wrap p-5">
                    {data.products && data.products.map((product) => (
                        <Product product={product}/>
                    ))}
                </div>

            </div>


        </BaseLayout>
    );
}