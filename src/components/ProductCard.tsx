import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product : IProduct;
}
const ProductCard = ({product}: IProps) => {
  console.log(product.id)
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={product.imageUrl}
        alt={product.title}
        className="rounded-md h-52 w-full lg:object-cover mb-2"
      />

      <h3>{product.title}</h3>

      <p>
       {txtSlicer(product.description)}
      </p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full  cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{product.price}</span>

        <Image
          imageURL={product.imageUrl}
          alt={product.title}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700">Edit ✏️</Button>
        <Button className="bg-red-700">Delete 🛑</Button>
      </div>
    </div>
  );
};

export default ProductCard;
