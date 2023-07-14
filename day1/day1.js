function numbersThenCharacters(arr) {
  const sortedArr = arr.map(subArr => {
    const numbers = [];
    const letters = [];

    subArr.forEach(element => {
      if (typeof element === 'number') {
        numbers.push(element);
      } else if (typeof element === 'string') {
        letters.push(element);
      }
    });

    numbers.sort((a, b) => a - b);
    letters.sort();

    return [...numbers, ...letters];
  });

  return sortedArr;
}

const arr = [
  [11, 12, 24, 23, 'a', 'b'],
  [56, 'c', 45],
  [67, 'd'],
  ['f', 'e', 78]
];

const sortedArr = numbersThenCharacters(arr);
console.log(sortedArr);
