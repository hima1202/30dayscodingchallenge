function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const newGrid = [];
  
    // Helper function to calculate the spotlight sum for a given cell
    function calculateSpotlightSum(row, col) {
      let sum = 0;
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i >= 0 && i < rows && j >= 0 && j < cols) {
            sum += grid[i][j];
          }
        }
      }
      return sum;
    }
  
    // Calculate the spotlight sum for each cell and store it in the new grid
    for (let i = 0; i < rows; i++) {
      const newRow = [];
      for (let j = 0; j < cols; j++) {
        const spotlightSum = calculateSpotlightSum(i, j);
        newRow.push(spotlightSum);
      }
      newGrid.push(newRow);
    }
  
    return newGrid;
  }
  
  // Test the function with the provided example
  const inputGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transformedGrid = spotlightMap(inputGrid);
  console.log(transformedGrid);
  