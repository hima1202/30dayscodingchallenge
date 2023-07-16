function getObject(obj) {
    const uniqueMarks = {};
  
    for (const key in obj) {
      const entry = obj[key];
      const { marks } = entry;
  
      if (!(marks in uniqueMarks) || entry.age > uniqueMarks[marks].age) {
        uniqueMarks[marks] = entry;
      }
    }
  
    return uniqueMarks;
  }
  
  // Testing the function with example inputs
  const example1 = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };
  
  const example2 = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
  };
  
  console.log(getObject(example1));
  console.log(getObject(example2));
  