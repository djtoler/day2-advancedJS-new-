const formatCurrency = (amount) => {
    if (amount === 0) {
        amount = "$0.00"
        return amount
    } 
    
    else if (amount >= 0) {
      return '$' + amount.toFixed(2);
    } 
    
    else {
      amount = "-" + "$" +  amount.toFixed(2).toString().substring(1)
    // amount = amount.toFixed(2);
    // amount = "$" + amount;
    console.log("neg");
    return amount
    }
  }
  

  const getCoins = (cents) => {

  }

module.exports.formatCurrency = formatCurrency;
module.exports.getCoins = getCoins;