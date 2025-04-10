import axios from "axios";
import React, { useEffect, useState } from "react";
import fav from "../assets/images/heart.png"
const Card = () => {
    const [products, setProducts] = useState([]);
    const url = "https://fakestoreapi.com/products"


    // Fetch data from the API
    function fetchData() {
        const response = axios.get(url)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
   
    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="Card_Component">
          {products && products.map((product)=>(
                 <div className="product-card" >
                 <div className="image-container">
                     <img src={product.image} alt="Product Image" />
                 </div>
                 <div className="info_container">
                     <div className="product-name">PPXOC MILKYWAY DRESS IN...</div>
                     <div className="price-row">
                         <span>
                             <a href="#">Sign in</a> or Create an account to see pricing
                         </span>
                         <img src={fav} alt="" className="heart" />
                     </div>
                 </div>
             </div>
          ))}
           

        </div>
    );
};

export default Card;