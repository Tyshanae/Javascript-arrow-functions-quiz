function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

// Turn all functions above to arrow functions

// const squareAndFindEvens = numbers => numbers.map(val => val **2).filter(square % 2 === 0);
