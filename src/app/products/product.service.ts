import { Product } from './product.model'

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '';
  // data.createdAt = new Date(1980, 0, 1);
  products.push(data);
}

export const getProduct = (id: number) => {
  // code
}

export const updateProduct = (id: number | string, changes: Product) => {
  // code
}

export const deleteProduct = (id: number) => {
  // code
}

export const allProducts = () => {
  // code
}
