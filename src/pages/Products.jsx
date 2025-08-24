import BaseLayout from "../layout/Base";
import ProductList from "../components/ProductList";

export default function Products() {
    return (
        <BaseLayout>
            <h1>Products page</h1>
            <ProductList />
        </BaseLayout>
    );
}