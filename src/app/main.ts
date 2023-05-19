import { faker } from '@faker-js/faker';

import { addProduct, products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    color: faker.color.human(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    createdAt: faker.date.recent(),
    desc: faker.commerce.productDescription(),
    id: faker.string.uuid(),
    image: faker.image.url(),
    isNew: faker.datatype.boolean(),
    price: faker.number.float({min: 100.00, max: 1000.00}),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.number.int({min: 1, max: 100}),
    tags: [faker.commerce.department(), faker.commerce.department()],
    title: faker.commerce.productName(),
    updatedAt: faker.date.recent(),
  });

  console.log(products);
}
