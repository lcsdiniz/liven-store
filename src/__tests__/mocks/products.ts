import { Product } from "../../types/product";

export const ProductMock1: Product = {
    id: 1,
    title: "Title 1",
    price: 10.50,
    category: "Category 1",
    description: "Description 1",
    image: "Image Url 1",
    rating: {
      rate: 1,
      count: 1
    },
};
  
export const ProductMock2: Product = {
    id: 2,
    title: "Title 2",
    price: 20.10,
    category: "Category 2",
    description: "Description 2",
    image: "Image Url 2",
    rating: {
      rate: 2,
      count: 2
    },
};