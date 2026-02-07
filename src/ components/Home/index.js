import {Navigate, useNavigate} from "react-router-dom";

import Header from '../Header'
import './index.css'

const Home = () => {
    const navigate = useNavigate()
    const redirectToProducts = () => {
        navigate('/products')
    }

    const token = localStorage.getItem('authToken');
    if (!token){
        return <Navigate to="/login" replace />
    }

    return(

    <>
        <Header />
        <div className="main-container">
            <div className="home-container">
                <h1 className="heading">Clothes That Get You Noticed</h1>
                <p className="description">
                    Fashion is part of the daily air and it does not quite help that it
                    changes all the time. Clothes have always been a marker of the era and
                    we are in a revolution. Your fashion makes you been seen and heard
                    that way you are. So, celebrate the seasons new and exciting fashion
                    in your own way.
                </p>
                <div className="button-container">
                <button type="button" className="shop-now-button" onClick={redirectToProducts}>
                    Shop Now
                </button>
                </div>
            </div>
            <div>
                <img alt="logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" />
            </div>
        </div>
    </>
    )
}

export default Home