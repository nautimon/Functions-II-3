function calculateTotal(subtotal, tax, tip) {
  var totalTax = subtotal * tax;
  var totalTip = subtotal * tip;
  
  var total = subtotal + totalTax + totalTip;
  return total;
}

calculateTotal(50, 0.08, 0.2);
console.log(total);
