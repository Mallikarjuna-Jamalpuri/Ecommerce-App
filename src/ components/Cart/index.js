import {useState} from  "react";
import Header from '../Header'
import {Navigate} from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import './index.css'

const Cart = props => {
    const [count, setCount] = useState(1);
    const {cartItems} = props;
    const token = localStorage.getItem('authToken');
    if (!token){
        return <Navigate to="/login" replace />
    }
    if(cartItems.length === 0){
        return <h2>Your Cart is Empty</h2>
    }

    const onIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const onDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <>
        <Header />
            <h1 className="text-center">Cart</h1>
            <div className="cart-container">
                    {cartItems.map((item, index) => (
                        <div className="cart-items" key={index}>
                            <div className="image-container">
                                <img className="image" src={item.images[0]} alt={item.title}/>
                            </div>
                            <div>
                                {item.brand ? <p>Brand: {item.brand}</p> : <p>Brand: ABC</p>}
                                <p className="description"> {item.description}</p>
                                <p>{item.availabilityStatus}</p>

                                <div className="button-containerr">
                                    <div className="btn-container">
                                        <button className="button-symbol" type="button" onClick={onIncrement}>+</button>
                                        <p className="count text-center">{count}</p>
                                        <button className="button-symbol" type="button" onClick={onDecrement}>-</button>
                                    </div>

                                <div>
                                    <button className="delete-btn" >
                                        <FaTrash />
                                    </button>
                                </div>
                                </div>
                                <hr className="divider" />
                            </div>
                        </div>
                    ))}
            </div>

        </>

    )
}

export default Cart