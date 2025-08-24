import logo from '../assets/logo.svg';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../context/Theme";
import {CartContext} from "../context/Cart";

export default function BaseLayout({children}) {
    const [theme, setTheme] = useContext(ThemeContext);
    const [cart] = useContext(CartContext);

    return (
        <div className={theme === 'light' ? "app light" : "app dark bg-black text-white"}>
            <header className="app-header flex gap-5 items-center">
                <img src={logo} className="app-logo" alt="logo" />
                <nav className="app-nav flex gap-5 items-center">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/products"}>Produkte</Link>
                    <Link to={"/contact"}>Kontakt</Link>
                    <Link to={"/about"}>Über</Link>
                    <Link to={"/cart"}>Warenkorb ({cart.length})</Link>
                    {theme === "dark"
                        ? <button onClick={() => setTheme('light')}>Light Mode</button>
                        : <button onClick={() => setTheme('dark')}>Dark Mode</button>
                    }
                </nav>
            </header>
            <section className="app-content">
                {children}
            </section>
        </div>
    );
}