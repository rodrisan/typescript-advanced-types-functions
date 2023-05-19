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


// Partial
// export type UpdateProductDto = Partial<Product>
export interface UpdateProductDto extends Partial<CreateProductDto>{}


// Required
type exampleRequired = Required<Product>;
// type exampleRequired = {
//   title: string;
//   image: string;
//   desc: string;
//   stock: number;
//   size: Sizes; // This was non-required now it is.
//   color: string;
//   price: number;
//   category: Category;
//   isNew: boolean;
//   tags: string[];
//   readonly id: string | number;
//   readonly createdAt: Date;
//   updatedAt: Date;
// }


// Readonly
type exampleReadOnly = Readonly<Product>;

// export interface FindProductDto extends Readonly<Partial<Product>>{}
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}
