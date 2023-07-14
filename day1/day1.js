function numbersThenCharacters(arr) {
  const numbers = [];
  const letters = [];

  
  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      const element = subArr[j];
      if (typeof element === 'number') {
        numbers.push(element);
      } else if (typeof element === 'string') {
        letters.push(element);
      }
    }
   }
  

  numbers.sort(function(a,b){return a-b});
  letters.sort();
  const mergedSubArr = [...numbers, ...letters];
  
  
  const sortedArr=[];
   for(let i=0;i<arr.length;i++){
       const subArr1=[];
       const l=arr[i].length;
       for(let j=0;j<l;j++)
       {
           const element=mergedSubArr.shift();
           subArr1.push(element);
       }
       sortedArr.push(subArr1);
   }
 return sortedArr;
}
const arr=[
[11, 26, 45.4, "f", "a", "b"],
[0], [1.5, "d","X",35,"s"],
["f", "e", 58],
["p","Y","Z"],
[98,72]
]
 
 sortedArr = numbersThenCharacters(arr);
  console.log(sortedArr);
   
