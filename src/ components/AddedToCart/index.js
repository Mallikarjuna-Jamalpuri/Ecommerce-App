import { useLocation, Link } from "react-router-dom";
import './index.css'

const AddedToCart = () => {
    const location = useLocation();

    const { product } = location.state || {};

    if (!product) {
        return <h2>No product added</h2>;
    }

    const today = new Date()
    const deliveryDate = new Date(today)
    deliveryDate.setDate(today.getDate() + 7)
    const formattedDate = deliveryDate.toDateString()

    return (
        <>
        <div className="added-to-cart-container">
            <div className="add-to-cart">
                <div>
                    <img src={product.images[0]} alt={product.title} width="180" height="180" />
                </div>
                <div>
                    <h2 className="add-cart-heading">✅ Added to Cart</h2>
                    <h3 className="add-cart-title">{product.title}</h3>
                    <p className="add-cart-description">Rs. {Math.ceil(Number(product.price || 0))}</p>
                    <p>{product.shippingInformation}</p>
                    <p>Expected delivery by <strong>{formattedDate}</strong></p>
                </div>
            </div>
                <div className="buttons-container">
                    <Link to="/cart">
                    <button className="cart-button" type="button">Go to Cart</button>
                    </Link>

                    <Link to="/products">
                    <button className="cart-button" type="button">Continue Shopping</button>
                    </Link>
                </div>

        </div>
</>
    );
};

export default AddedToCart;
