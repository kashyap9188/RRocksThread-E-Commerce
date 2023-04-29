import React, { Fragment, useEffect } from "react";
import { CgMouse} from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard"
import MetaData from "../layout/MetaData";
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader";

const Home = () => {

  const dispatch = useDispatch();
  const {loading, products, productsCount,error} = useSelector(
    (state)=>state.products
    
  );

  useEffect(()=>{
    if (error) {
      return window.alert(error);
    }
    dispatch(getProduct());
  },[dispatch, alert]);


  return (
    <Fragment>

      {loading ? <Loader /> : <Fragment>
      <MetaData title="RRocks" />

      <div className="banner">
            <p>Welcome</p>
            <p>To</p>
            <p>RRocks Thread and Jari</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse/>
              </button>
            </a>
      </div>

      <h2 className="homeHeading">Featured Product</h2>

      <div className="container" id="container">
        {/* <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} /> */}

        {products && products.map((product) => <ProductCard product={product} /> )}
      </div>

    </Fragment>}

    </Fragment>
  );
};

export default Home;
