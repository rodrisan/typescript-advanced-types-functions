import { faker } from '@faker-js/faker';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto';
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

export const getProduct = (id: Product['id']) => {
  // code
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const deleteProduct = (id: Product['id']) => {
  // code
}

export const allProducts = () => {
  // code
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // filter
  // dto.color = '0'; // can't do it, because is readonly
  // dto.isNew = false; // can't do it, because is readonly

  // with readonly, disable all this functionality.
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  return products;
}
