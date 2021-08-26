import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from '../redux/actions/productActions';
import ProductComponent from "./ProductComponent";


const ProductListing =()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts= async()=>{
     
        var options = {
            method: 'GET',
            url: 'https://rawg.io/api/games?key=41e6a8e65b064f30b3221cc9ee70f3f6',
               };
          axios.request(options).then(function (response) {
              dispatch(setProducts(response.data));
          }).catch(function (error) {
              console.error(error);
          });
        };
      
   
    useEffect(()=>{fetchProducts();},[]);
    
    console.log("Products: ",products);
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );

};

export default ProductListing;