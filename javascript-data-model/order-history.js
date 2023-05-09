const orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    shipTo: 'JS Masher',
    total: 34.0,
    orderPlaced: 'August 4, 2020',
    delivered: 'Aug 8, 2020',
    returnWindow: 'Sep 7, 2020',
    book: 'Javasript for imatient programmers',
    author: 'Rauchmayer, Dr. Axel',
    price: 31.55,
  },
  {
    orderNumber: '113-9984268-1280257',
    shipTo: 'JS Masher',
    total: 44.53,
    orderPlaced: 'July 19, 2020',
    delivered: 'July 20, 2020',
    returnWindow: 'Aug 19, 2020',
    book: 'The Timeless Way of BUilding',
    author: 'Alexander, Christopher',
    price: 41.33,
  },
  {
    orderNumber: '114-28755557-9059409',
    shipTo: 'JS Masher',
    total: 17.22,
    orderPlaced: 'July 4, 2020',
    delivered: 'Jul 7, 2020',
    returnWindow: 'Aug 5, 2020',
    item: 'Gamecube controller Adapter.',
    price: 15.99,
  },
  {
    orderNumber: '113-2883177-2648248',
    shipTo: 'JS Masher',
    total: 138.93,
    orderPlaced: 'July 5, 2020',
    delivered: 'Aug 4, 2020',
    returnWindow: 'Aug 4, 2020',
    item1: [
      {
        item: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        price: 94.95,
      },
    ],
    item2: [
      {
        book: 'The art of Sql',
        author: 'Faroult, Stephane',
        price: 15.99,
      },
    ],
  },
];
console.log('value of orderHistory:', orderHistory);
