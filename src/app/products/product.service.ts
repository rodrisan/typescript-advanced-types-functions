import { Product } from './product.model'
const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '';
  // data.createdAt = new Date(1980, 0, 1);
  products.push(data);
}
