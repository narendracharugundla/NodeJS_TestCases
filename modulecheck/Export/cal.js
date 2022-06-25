exports.add = (a, b) => a + b;
exports.addition=function(a,b){
    return a+b;
}
exports.car = {
    brand: 'tesla',
    model: 'Model S',
  };
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => {
    if (b != 0) {
        return a / b;
    }
    return `Divided by zero !!!`;
}