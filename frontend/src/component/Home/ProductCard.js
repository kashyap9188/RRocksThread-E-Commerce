import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductCard = ({product})=>{

    const options = {
        // size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };
  const navigate = useNavigate();


    //when click on navbar->Products Then for change url /products/product/id => /product/id
    const changeUrl = (e) => {
        e.preventDefault();

        navigate(`/product/${product._id}`) 
      };

    return(
        <Link className="productCard" to={`product/${product._id}`}>
            
            <img className="image-resize" src={product.images[0].url} alt={product.name} onClick={changeUrl} />
            
            {/* <img src={shirt} alt={product.name} /> */}
            <p>{product.name}</p>
            <div>
                <Rating {...options} /> <span className="productCardSpan">({product.numOfReviews} Reviews)</span>
            </div>
            <span>{`₹${product.price}`}</span>



        </Link> 
    );
}

export default ProductCard;

//6.36.00 filtering start