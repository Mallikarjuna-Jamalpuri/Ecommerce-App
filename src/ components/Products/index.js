import {Component} from 'react'
import ProductCard from "../ProductCard";
import './index.css'
import Header from "../Header";
import {Navigate} from "react-router-dom";

 class Products extends Component {
     state = {
         productsList: [],
     }

     componentDidMount() {
         this.getProducts();
     };

     getProducts = async () => {
         const response =await fetch('https://dummyjson.com/products?limit=60')
            const fetchedData = await response.json()
         const updatedProductsList = fetchedData.products

         this.setState({productsList: updatedProductsList})

     };

     render() {
         const token = localStorage.getItem('authToken');
         if (!token){
             return <Navigate to="/login" replace />
         }

         const  {productsList} = this.state;
         const {addToCart, cartItems} = this.props;
         return (
             <>
             <Header />

             <div className="products-card">
                 <h1 className="products-list-heading">All Products</h1>
                 <ul className="products-list">
                     {productsList.map((product) => (
                         <ProductCard productData={product} cartItems={cartItems} addToCart={addToCart} key={product.id} />
                     ))}
                 </ul>
             </div>

             </>
         );
     };
 }

export default Products



















