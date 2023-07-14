function countChocolates(money, cost) {
    let total=money/cost;
    let wrappers = total;
  
    while (wrappers >= 3) {
      const additionalChocolates = Math.floor(wrappers / 3);
      total += additionalChocolates;
      wrappers = wrappers % 3 + additionalChocolates;
    }
  
    return total;
  }
  const totalchocolates = countChocolates(55, 5);
  console.log(totalchocolates);
  