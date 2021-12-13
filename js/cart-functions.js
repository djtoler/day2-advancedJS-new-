const calculateChange = (payment, total) => {
    return payment - total
}

const isSufficentPayment = (payment, total) => {
    if (payment >= total) {
        return true
    } else {
        return false
    }
}

function calculateTotal  (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i].price
  }
return sum;
}

function addItem (itemsArray, name, price) {
    let newObject = {
      name: name, 
      price: price
    }
      itemsArray.push(newObject)
    //   return itemsArray
  }

  const removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1)
    return itemsArray
  }

module.exports.calculateChange = calculateChange;
module.exports.isSufficentPayment = isSufficentPayment;
module.exports.calculateTotal  = calculateTotal ;
module.exports.addItem  = addItem ;
module.exports.removeItem = removeItem;

