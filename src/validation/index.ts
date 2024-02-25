/**
 * Validates product data.
 * @param {Object} product - The product object to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageUrl - The URL of the product image.
 * @param {string} product.price - The price of the product.
 * @returns {Object} An object containing error messages for invalid fields.
 * @returns {string} [Object.title=""] - Error message for the title field.
 * @returns {string} [Object.description=""] - Error message for the description field.
 * @returns {string} [Object.imageUrl=""] - Error message for the imageUrl field.
 * @returns {string} [Object.price=""] - Error message for the price field.
 */

export const productValidation = (product : {title:string , description: string , imageUrl: string , price: string})=>{
    const errors: {
      title: string;
      description: string;
      imageUrl: string;
      price: string;
    } = {
      title: "",
      description: "",
      imageUrl: "",
      price: "",
    };

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl)

    if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
        errors.title = "Product Title Must be Between 10 and 80 Characters "
    }

    if(!product.description.trim() || product.description.length < 10 || product.description.length > 80){
        errors.description = "Product Description Must be Between 10 and 900 Characters "
    }

    if(!product.imageUrl.trim() || !validUrl){
        errors.imageUrl = "Valid Image URL is Required"
    }

    if(!product.price.trim() || isNaN(Number(product.price))){
        errors.price = "Valid price is Required"
    }
    return errors
}