import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useParams} from "react-router-dom"

const Detail = () =>{
    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then (res => setProduct(res.data))
        .catch(err => console.log(err))
    },[])

    return (
        <>
        <h6>
            {product._id}
        </h6>
        <h1>
            {product.name}
        </h1>
        <h1>
            {product.price}
        </h1>
        <h1>
            {product.desc}
        </h1>
        </>
    )
}

export default Detail