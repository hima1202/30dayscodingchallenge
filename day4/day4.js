function isSimilar(obj1, obj2) {
    // Check if the objects have the same type
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    // Check if the objects are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      // Check if the arrays have the same length
      if (obj1.length !== obj2.length) {
        return false;
      }
  
      // Recursively compare each element in the arrays
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
  
      return true;
    }
  
    // Check if the objects are maps
    if (obj1 instanceof Map && obj2 instanceof Map) {
      // Check if the maps have the same size
      if (obj1.size !== obj2.size) {
        return false;
      }
  
      // Iterate over each key-value pair in the maps
      for (const [key, value] of obj1.entries()) {
        if (!isSimilar(value, obj2.get(key))) {
          return false;
        }
      }
  
      return true;
    }
  
    // Check if the objects are plain objects
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      // Get the keys of the objects
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      // Check if the objects have the same number of keys
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      // Recursively compare each key-value pair in the objects
      for (const key of keys1) {
        if (!isSimilar(obj1[key], obj2[key])) {
          return false;
        }
      }
  
    }else{
      if(obj1!==obj2){
        return false;
      }
    }
      return true;
    
  }
  const obj1 = ["cars","trains",["roads",["railways"]]];
  const obj2 = ["cars","trains",["roads",["railways"]]];
  console.log(isSimilar(obj1,obj2));
  