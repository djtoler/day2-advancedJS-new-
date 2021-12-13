const {formatCurrency, formatCurrency2 } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    
    expect(formatCurrency(0))
    // Assert 
    .toBe("$0.00")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(1))
    // Assert 
    .toBe("$1.00")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(1.5))
    // Assert 
    .toBe("$1.50")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(0.01))
    // Assert 
    .toBe("$0.01")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(-1))
    // Assert 
    .toBe("-$1.00")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(100))
    // Assert 
    .toBe("$100.00")
  });

  test("add formatCurrency tests here", () => {
    // Arrange 
    // Act 
    expect(formatCurrency(10))
    // Assert 
    .toBe("$10.00")
  });





});

// describe("getCoins", () => {
//   test.todo("add getCoins tests here");
// });

