const { calculateChange, isSufficentPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("add calculateChange tests here", () => {
    expect(calculateChange(6, 5)).toBe(1);
    // expect(cart-functions.calculateChange(6, 5)).toBe(1)
    expect(calculateChange(13.03, 12.30)).toBeCloseTo(0.73);
    expect(calculateChange(100, 50)).toBeGreaterThan(48);
    expect(calculateChange(100, 50)).toBeCloseTo(50);

  });
});

describe("isSufficientPayment", () => {
  test("add isSufficientPayment tests here", () => {
//   Given total 5 and payment 6, it returns true.
// Given total 10 and payment 7, it returns false.
// Given total 3 and payment 3, it returns true.
// Add one more test case with numbers that you choose.
    expect(isSufficentPayment(6, 5)).toBe(true);
    expect(isSufficentPayment(7, 10)).toBe(false);
    expect(isSufficentPayment(3, 3)).toBe(true);
    expect(isSufficentPayment(10, 8)).toBe(true);
    expect(isSufficentPayment(100, 88)).toBe(true);

  });
});

describe("calculateTotal", () => {
  test(" calculateTotal for 1 item ", () => {
    let footwear = [{
                    type: "shoes", 
                    price: 4.99
                  }];
    expect(calculateTotal (footwear)).toBeCloseTo(4.99);
  });

  test("calculateTotal for multiple items", () => {
    let footwear2 = [
      {type: "shoes", price: 3.50},
      {type: "boots", price: 12.99},
      {type: "sandals", price: 0.03}
    ];
    expect(calculateTotal(footwear2)).toBeCloseTo(16.52);
  });

  test("calculateTotal for zero items", () => {
    // ?????????Given an empty itemsArray, it returns 0????????????
    let footwear3 = [];
    expect(calculateTotal(footwear3)).toBeCloseTo(0);
  });
});

describe("addItem", () => {

  test("Add 1 Item", () => {
    let emptyArray = [];
    addItem(emptyArray, "Beans", 3 );
    expect(emptyArray).toEqual([
      { name: "Beans", price: 3 }
    ]);
  });

  test("add addItem tests here", () => {
    let twoItemsArray = [
      { name: "Beans", price: 3 }
    ]
    addItem(twoItemsArray, "Sugar", 2 );
    expect(twoItemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 }
    ])

    let fourItemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 2 },
    ]
    addItem(fourItemsArray, "Steak", 1 );
    expect(fourItemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 2 },
      { name: "Steak", price: 1 },
    ])
  });
});

describe("removeItem", () => {
  test("add removeItem tests here", () => {

  // Arange
    let arrayOfThreeItemsA = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 2 },
    ]
  // Act
  expect(removeItem(arrayOfThreeItemsA, 0))
  // Assert
  .toEqual([
    { name: "Sugar", price: 2 },
    { name: "Candy", price: 2 }
])

    // Arange
    let arrayOfThreeItemsB = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Candy", price: 2 },
    ]
  // Act
  expect(removeItem(arrayOfThreeItemsB, 2))
  // Assert
  .toEqual([
    { name: "Beans", price: 3 },
    { name: "Sugar", price: 2 }
])

  // Arange
  let arrayOfThreeItemsC = [
    { name: "Beans", price: 3 },
    { name: "Sugar", price: 2 },
    { name: "Candy", price: 2 },
  ]
  // Act
  expect(removeItem(arrayOfThreeItemsC, 1))
  // Assert
  .toEqual([
    { name: "Beans", price: 3 },
    { name: "Candy", price: 2 }
])

  // Arange
  let arrayOfOneItem = [
    { name: "Beans", price: 3 }
  ]
  // Act
  expect(removeItem(arrayOfOneItem, 0))
  // Assert
  .toEqual(
    []
    )

  });
});