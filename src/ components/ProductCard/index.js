import {useNavigate}  from "react-router-dom";

import './index.css'


const ProductCard = (props) => {
     const {productData, addToCart, cartItems} = props;
     const {title, price} = productData;

     const isAdded = cartItems.some(item => item.id === productData.id);

    const  navigate = useNavigate()

    const handleAddToCart = () => {
        addToCart(productData)
        navigate('/addedToCart', {state: {
                product: productData,
            }
        })
    }

     return (
         <li className="product-list-items">
            <img src={productData.images[0]} alt={title} className="product-image" />
             <div className="d-flex flex-column justify-content-center align-items-center">
                 <p className="product-title">{title}</p>

                 <p className="product-price">Rs. {price ? Math.ceil(Number(price * 10)) : 0}</p>
                 <button type="button" disabled={isAdded} className="buy-button btn btn-success" onClick={handleAddToCart}>{isAdded ? "Added" : "Add to cart"}</button>
             </div>
         </li>
     )
 }
 export default ProductCard

