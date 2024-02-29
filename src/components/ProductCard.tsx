import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product : IProduct;
  setProductToEdit : (product : IProduct)=>void;
  openEditModal :()=>void;
}
const ProductCard = ({product ,setProductToEdit , openEditModal}: IProps) => {
  const {title , description , imageUrl , price ,colors , category} = product
  
  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    /> 
  ));

  const onEdit =()=>{
    setProductToEdit(product)  
    openEditModal()
  }
  
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageUrl}
        alt={title}
        className="rounded-md h-52 w-full lg:object-cover mb-2"
      />

      <h3>{title}</h3>

      <p>
       {txtSlicer(description)}
      </p>

    <div className="flex items-center flex-wrap space-x-1" >{renderProductColor}</div>

      <div className="flex items-center justify-between">
        <span>{price}</span>

        <Image
          imageURL={category.imageUrl}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" onClick={onEdit}>Edit ✏️</Button>
        <Button className="bg-red-700">Delete 🛑</Button>
      </div>
    </div>
  );
};

export default ProductCard;
