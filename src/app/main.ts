import { faker } from '@faker-js/faker';

import { addProduct, findProducts, products, updateProduct } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    categoryId: faker.string.uuid(),
    color: faker.color.human(),
    desc: faker.commerce.productDescription(),
    image: faker.image.url(),
    isNew: faker.datatype.boolean(),
    price: faker.number.float({min: 100.00, max: 1000.00}),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.number.int({min: 1, max: 100}),
    tags: [faker.commerce.department(), faker.commerce.department()],
    title: faker.commerce.productName(),
  });

  console.log(products);
}

const product = products[0];
updateProduct(product.id, {
  title: 'Updated title',
  stock: 434,
})

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  tags: ['1'],
});
