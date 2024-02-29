import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { Colors, categories, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMSG from "./components/ErrorMSG";
import { v4 as uuid } from "uuid";
import CircleColor from "./components/ui/CircleColor";
import Select from "./components/ui/Select";
import { ProductName } from "./type";

function App() {
  /* State */
  const defaultProjectobj = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProjectobj);
  const [productToEdit,setProductToEdit] = useState<IProduct>(defaultProjectobj)
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const[isOpenEditModal,setIsOpenEditModal] = useState(false)
  const [selectedCategory , setSelectedCategory] = useState(categories[0])

  /* Handler */

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    //disable error msg when validation is true
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    //disable error msg when validation is true
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const errors = productValidation({
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
    });

    const hasErrorMSG =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMSG) {
      setErrors(errors);
      return;
    }

    setProducts(prev => [{...product , id:uuid() , colors : tempColors, category : selectedCategory} ,...prev ])
    setProduct(defaultProjectobj)
    setTempColors([]);
    closeModal()
  };
  
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const errors = productValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      imageUrl: productToEdit.imageUrl,
      price: productToEdit.price,
    });

    const hasErrorMSG =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMSG) {
      setErrors(errors);
      return;
    }

   
    setProductToEdit(defaultProjectobj)
    setTempColors([]);
    closeModal()
  };

  const onCancel = () => {
    setProduct(defaultProjectobj);
    closeModal();
  };

  const renderProductEditWithError=(id : string , name : ProductName , label : string)=>{
    return(
    <div className="flex flex-col">
            <label htmlFor={id} className="mb-2 text-sm font-medium">
              {label}
            </label>
            <Input
              type="text"
              name= {name}
              id={id}
              value={productToEdit[name]}
              onChange={onChangeEditHandler}
            />
            <ErrorMSG msg={errors[name]} />
          </div>
    )
  }
  /* Render */
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal} />
  ));

  const renderFormInput = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id} className="mb-2 text-sm font-medium">
        {" "}
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMSG msg={errors[input.name]} />
    </div>
  ));

  const renderProductColor = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((previousColor) =>
            previousColor.filter((item) => item !== color)
          );
          return;
        }
        setTempColors((previousVal) => [...previousVal, color]);
      }}
    />
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>
      <div className="bg-indigo-400 m-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 font-bold font-sans p-2 rounded-md">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInput}
          <Select selected={selectedCategory} setSelected ={setSelectedCategory}/>
          <div className="flex  items-center space-x-1 ">
            {renderProductColor}
          </div>
          <div className="flex  items-center space-x-1 ">
            {tempColors.map((color) => (
              <span key={color} style={{ backgroundColor: color }}>
                {color}
              </span>
            ))}
          </div>
              
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* edit Modal */}

      <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="Edit This Product">
        
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithError("title","title","title")}
          {renderProductEditWithError("description","description","description")}
          {renderProductEditWithError("imageUrl","imageUrl","imageUrl")}
          {renderProductEditWithError("price","price","price")}
         
          {/* <Select selected={selectedCategory} setSelected ={setSelectedCategory}/>
          <div className="flex  items-center space-x-1 ">
            {renderProductColor}
          </div>
          <div className="flex  items-center space-x-1 ">
            {tempColors.map((color) => (
              <span key={color} style={{ backgroundColor: color }}>
                {color}
              </span>
            ))}
          </div>
               */}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
