
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Edit = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            setName(res.data.name)
            setPrice(res.data.price)
            setDesc(res.data.desc)
        })
        .catch(err=>console.log("Error: ", err))
    },[])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`,{
            name,
            price,
            desc
        })
        .then(res=>console.log("Response: ", res))
        .catch(err=>console.log("Error: " , err))
    }



return (
<form onSubmit={onSubmitHandler}>
    <p>
        <label>Product Title</label>
        <input type="text" name='name' value={name} onChange={e=>setName(e.target.value)}/>
    </p>
    <p>
        <label>Product Price</label>
        <input type="number" name='price' value={price} onChange={e=>setPrice(e.target.value)}/>
    </p>

    <p>
        <label>Product Description</label>
        <input type="text" name='desc' value={desc} onChange={e=>setDesc(e.target.value)}/>
    </p>
    <input type="submit"/>
</form>);
};

export default Edit;
