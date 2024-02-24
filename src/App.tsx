import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {

  /* State */
  const [isOpen, setIsOpen] = useState(false);

/* Handler */
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  /* Render */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInput = formInputList.map(input => (
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-2 text-sm font-medium"> {input.label}
      </label>
      <Input type={input.type} name={input.name} id={input.id}/>
      </div>
  ))

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add</Button>
      <div className="bg-indigo-400 m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 font-bold font-sans p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3">
           {renderFormInput}
        
        <div className="flex items-center space-x-3">
        <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
        <Button className="bg-gray-500 hover:bg-gray-600">Cancel</Button> 
        </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
