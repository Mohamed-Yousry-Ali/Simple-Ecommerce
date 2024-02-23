import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container mx-auto">
      <div className="bg-indigo-400 m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 font-bold font-sans p-2 rounded-md">
        {renderProductList}
      </div>
    </main>
  );
}

export default App;
