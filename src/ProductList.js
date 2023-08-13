import { useEffect, useState } from "react";

export default function ProductList() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                console.log(data); // Move console.log here if you want to log the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <h1>Data from backend</h1>
             {<div>{product[4].title}</div>}
        </>
    );
}
