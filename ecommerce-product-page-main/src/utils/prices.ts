const getPrice = (price: number, discount: number) => (price * discount) / 100;

const getTotal = (price: number, discount: number, quantity: number) =>
    getPrice(price, discount) * quantity;

export { getPrice, getTotal };
