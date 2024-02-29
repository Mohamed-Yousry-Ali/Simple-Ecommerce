 import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList : IProduct[] =[
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww",
        }
    },
    {
        id :uuid(),
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
        }
    },
    {
        id :uuid() ,
        title : "2022 Gensis GV70: Nomine",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus  quibusdam voluptatem excepturi molestiae id harum ab possimus provident vero est, earum tempore hic assumenda enim optio. Commodi animitemporibus dolores",
        imageUrl:"https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
        price:"50000.00",
        colors :["#FF0032","#2563eb","#FF6E31"],
        category :{
            name :"Cars",
            imageUrl:"https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww",
        }
    }
]

export const formInputList : IFormInput[]= [
    {
        id :"title",
        name : "title",
        label :"Product Title",
        type: "text"
    },
    {
        id :"description",
        name : "description",
        label :"Product Description",
        type: "text"
    },
    {
        id :"image",
        name : "imageUrl",
        label :"Product Image URL",
        type: "text"
    },
    {
        id :"price",
        name : "price",
        label :"Product Price",
        type: "text"
    },
]

export const Colors :string[] = [
 "#a85f77",
 "#2563eb",
 "#84D2C5",
 "#13005A",
 "#A31ACB",
 "#FF6E31",
 "#3C2A21",
 "#6C4AB6",
 "#CB1C80",
 "#000000",
 "#645CBB",
 "#1F8A70",
 "#820000",
 "#FF0032",
 "#FF0025",
 "#FF0015"
]
   
export const categories :ICategory[]  =[
    {
        id: uuid(),
        name : "Car",
        imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
    },
    {
        id: uuid(),
        name : "Shoes",
        imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
    },
]

