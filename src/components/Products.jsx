

import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const Products = () => {

    const [data, setData] = useState([])

    useEffect(()=>{

        axios({
            method:"GET",
            url : "https://fakestoreapi.com/products"
        }).then((res)=>{
            setData(res.data)
        }).catch((e)=>{
            console.log(e)
        })





    },[])



  return (
    
    <div className='fe'>
        <div className='container'>
    
    {
        data.map((product)=>(
            <div id = {product.id} className='main'>
                <div className="card">
                    <img src={product.image} alt="" srcset="" className='imgs'/>
                    <h3>{product.title}</h3>
                    <p>`"price is ${product.price}"`</p>
                    <div className="buttons">
                        <button>Add to cart</button>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>
        ))
    }
   



    
       
    </div>
    </div>
    
  )
}

export default Products


