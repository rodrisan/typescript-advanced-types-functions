import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  size: 'S',
  stock: 90,
  category: {
    id: 1,
    name: 'Category'
  }
});
