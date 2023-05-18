// Nullish-coalescing
// JS problems with 0, false or ''
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
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
