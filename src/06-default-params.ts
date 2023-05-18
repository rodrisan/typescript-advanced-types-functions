// Default parameters in functions.

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const prod1 = createProduct(1, true, 19);
console.log(prod1);

const prod2 = createProduct(1);
console.log(prod2);

const prod3 = createProduct(1, false, 0);
console.log(prod3);

const prod4 = createProduct(1, true, 10);
console.log(prod4);

const prod5 = createProduct(5, false);
console.log(prod5);
