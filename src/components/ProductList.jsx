import Product from './Product';
import {useEffect, useState} from "react";

export default function ProductList() {
    const limit = 36;
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.total / limit);

    useEffect(() => {
        let skip = (currentPage - 1) * limit;
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [currentPage]);

    return (
        <div className="flex flex-wrap p-5">
            { data.products && data.products.map((product) => (
                <Product product={product} />
            ))}

            <div className="flex gap-5 w-full justify-center">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>First</button>
                <button disabled={currentPage - 1 <= 0} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                {currentPage - 2 >= 1 &&
                    <button onClick={() => setCurrentPage(currentPage - 2)}>{currentPage - 2}</button>}
                {currentPage - 1 >= 1 &&
                    <button onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</button>}
                <p className="text-green-500">{currentPage}</p>
                {currentPage + 1 <= totalPages &&
                    <button onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</button>}
                {currentPage + 2 <= totalPages &&
                    <button onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 2}</button>}
                <button disabled={currentPage + 1 > totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                <button onClick={() => setCurrentPage(totalPages)}>Last</button>
            </div>
        </div>
    )
}