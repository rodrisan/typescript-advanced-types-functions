import { Product } from "./product.model";

// Omit
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: number | string;
}

type examplePick = Pick<Product, 'color' | 'image'>;
// type examplePick = {
//   image: string;
//   color: string;
// }
