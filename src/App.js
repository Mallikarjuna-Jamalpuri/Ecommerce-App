import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./ components/Home";
import Products from "./ components/Products";
import Header from "./ components/Header";
import Cart from "./ components/Cart";
import RegisterForm from "./ components/RegisterForm"
import LoginWithNavigate from "./ components/Login";
import AddedToCart from "./ components/AddedToCart";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev =>[...prev, product]);

    }

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginWithNavigate/>}/>
            <Route path="/registerForm" element={<RegisterForm/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
            <Route path="/products" element={<Products addToCart={addToCart} cartItems={cartItems} />}/>
            <Route path="/addedToCart" element={<AddedToCart/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App