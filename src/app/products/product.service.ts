import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.model'

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const getProduct = (id: number) => {
  // code
}

export const updateProduct = (id: number | string, changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const deleteProduct = (id: number) => {
  // code
}

export const allProducts = () => {
  // code
}
