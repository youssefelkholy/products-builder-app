import ProductCard from "./Components/ProductCard";
import { productList } from "./data";

function App () {
  // ** renders
  const renderedProducts = productList.map( product => <ProductCard key={ product.id } product={ product } /> );
  return (
    <main className="container">
      <div className="grid grid-cols-1 gap-3 rounded-md lg:p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grids">
        { renderedProducts }
      </div>
    </main>
  );
}

export default App;
