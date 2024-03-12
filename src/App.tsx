import ProductCard from "./Components/ProductCard";
import Button from "./Components/ui/Button";
import Modal from "./Components/ui/Modal";
import { productList } from "./data";
import { useState } from "react";

function App () {
  // STATES
  const [ isOpen, setIsOpen ] = useState( false );

  // HANDLER
  function closeModal () {
    setIsOpen( false );
  }

  function openModal () {
    setIsOpen( true );
  }

  // ** RENDERS
  const renderedProducts = productList.map( product => <ProductCard key={ product.id } product={ product } /> );
  return (
    <main className="container">
      <Button className="text-white bg-indigo-700" width="w-full" onClick={ openModal }>Add New Product</Button>
      <div className="grid grid-cols-1 gap-3 rounded-md lg:p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grids">
        { renderedProducts }
      </div>
      <Modal isOpen={ isOpen } closeModal={ closeModal } title="ADD NEW PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="text-white bg-gray-300 hover:bg-gray-400" width="w-full">Cancel</Button>
          <Button className="text-white bg-indigo-700" width="w-full">Submit</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
