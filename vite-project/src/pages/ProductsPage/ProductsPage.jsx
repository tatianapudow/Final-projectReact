import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../stores/cartSlice";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const res = await fetch('/products/all');
            const data = await res.json();
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">All products</h1>


            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                <div className="flex items-center gap-2">
                    <span className="font-medium">Price</span>
                    <input type="number" placeholder="from" className="w-20 border rounded-lg px-2 py-1" />
                    <input type="number" placeholder="to" className="w-20 border rounded-lg px-2 py-1" />
                </div>


                <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-medium">Discounted items</span>
                </label>


                <div className="flex items-center gap-2">
                    <span className="font-medium">Sorted</span>
                    <select className="border rounded-lg px-2 py-1">
                        <option>by default</option>
                        <option>price high to low</option>
                        <option>price low to high</option>
                    </select>
                </div>
            </div>


            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="group relative bg-white rounded-xl shadow-sm border p-4 flex flex-col hover:shadow-lg transition cursor-pointer"
                    >
                        {product.image && (
                            <img
                                src={`/${product.image}`}
                                className="w-full h-40 object-contain mb-4"
                            />
                        )}
                        <p className="text-lg font-medium mb-2">{product.title}</p>
                        <div className="flex items-center gap-3 mb-10">
                            <span className="text-xl font-bold">${product.discont_price || product.price}</span>
                        </div>
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-700"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
