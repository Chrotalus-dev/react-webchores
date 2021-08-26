import React,{useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { selectedProduct } from "../redux/actions/productActions";
import {useDispatch, useSelector} from "react-redux";


const ProductDetail =()=>{
    const product = useSelector((state)=>state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);
    
    // const fetchProductDetail = async () =>{
    //     const response = await axios.get(https://rawg.io/api/games/{productId}?key=41e6a8e65b064f30b3221cc9ee70f3f6).catch(err=>{
    //         console.log("Err ",err);
    //     });
    const fetchProductDetail= async()=>{
   
        var  options = {
            method: 'GET',
            url: "https://rawg.io/api/games/"+{productId}+"?key=41e6a8e65b064f30b3221cc9ee70f3f6",
               };
               console.log(options.url);
      await axios.request(options).then(function  (response) {
           dispatch(selectedProduct(response.data));
          }).catch(function (error) {
              console.error(error);
              console.log(productId);
          });
        
    };
    useEffect(()=>{
        if(productId && productId !=="") fetchProductDetail();
    },[productId]);

    return(
        <div>
            <h1>ProductDetail</h1>

        </div>
    );

};

export default ProductDetail;