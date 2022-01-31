import React, {useState} from "react";
import axios from 'axios'

export default props =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product",{
            name,
            price,
            desc
        })
        .then(res=>console.log("Response: ", res))
        .catch(err=>console.log("Error: " , err))
    }

    
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Title</label>
                <input type="text" onChange={e=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Product Price</label>
                <input type="number" onChange={e=>setPrice(e.target.value)}/>
            </p>

            <p>
                <label>Product Description</label>
                <input type="text" onChange={e=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}