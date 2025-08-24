import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Search from './pages/Search';
import Cart from './pages/Cart';
import {useEffect, useState} from "react";
import {ThemeContext} from "./context/Theme";
import {CartContext} from "./context/Cart";

export default function App() {
    const [theme, setTheme] = useState("light");
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <CartContext.Provider value={[cart, setCart]}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<Product />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>
        </ThemeContext.Provider>
    );
}