import React from "react";
import { useSelector } from "react-redux";

const ProductComponent =()=>{
    const products = useSelector((state)=>state.allProducts.products);
    const renderList = products.results.map((product)=>{
        const {id, slug,released,background_image}=product;
        return(<div className="four column wide" key={id}>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={background_image} alt={background_image}/>
                </div>
                   <div className="content">
                       <div className="header">{slug}</div>
                        <div className="meta released"> {released}</div>
                        
                </div>
       </div>
        </div>
        </div>);
    })
   
    
        
            
//         return(<div className="four column wide">
//         <div className="ui link cards">
//         <div className="card">
//             <div className="image"></div>
//                <div className="content">
//                    <div className="header">{slurg}</div>
//                     <div className="meta released"> {released}</div>
//                      <div className="meta">{category}</div>  
//             </div>
//    </div>
//     </div>
//     </div>);

        return <>{renderList}</>;


};

export default ProductComponent;