function findPath(tickets) {
    // Create a map to store the adjacency list of airports
    const graph = new Map();
  
    // Populate the adjacency list
    for (const [from, to] of tickets) {
      if (!graph.has(from)) {
        graph.set(from, []);
      }
      graph.get(from).push(to);
    }
  
    // Sort the destinations in lexical order
    for (const destinations of graph.values()) {
      destinations.sort();
    }
  
    const itinerary = [];
    const dfs = (airport) => {
      const destinations = graph.get(airport);
      while (destinations && destinations.length > 0) {
        const nextAirport = destinations.shift();
        dfs(nextAirport);
      }
      itinerary.unshift(airport);
    };
  
    dfs('A'); // Start the DFS from airport A
    return itinerary;
  }
  
  // Test cases
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); // ➞ ["A", "C", "F", "I", "Z"]
  console.log(findPath([["A", "C"], ["A", "B"], ["C", "B"], ["B", "A"], ["B", "C"]])); // ➞ ["A", "B", "A", "C", "B", "C"]
  console.log(findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]])); // ➞ ["A", "D", "A", "R", "Y", "L"]
  