import BaseLayout from "../layout/Base";
import {useContext} from "react";
import {CartContext} from "../context/Cart";

export default function Cart() {
    const [cart] = useContext(CartContext);
    return (
        <BaseLayout>
            <h1>Warenkorb</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Produkt</th>
                    <th>Preis</th>
                    <th>Anzahl</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                { cart && cart.map((product) => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.cost}</td>
                        <td>{product.quantity}</td>
                        <td>{product.quantity * product.cost}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </BaseLayout>
    );
}