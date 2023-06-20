const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((price) => ({
  price,
  salePrice: Number((price / 2).toFixed(4)),
}));

console.log('Price Objects:', priceObjects);

const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);

console.log('Formatted Prices:', formattedPrices);
