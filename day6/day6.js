function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
    let count = 0;
  
    // Helper function to check if a contiguous row has enough vacant seats for n friends
    function hasEnoughSeatsInRow(row, n) {
      let consecutiveEmptySeats = 0;
      for (let col = 0; col < cols; col++) {
        if (seatingArrangement[row][col] === 0) {
          consecutiveEmptySeats++;
          if (consecutiveEmptySeats === n) {
            return true;
          }
        } else {
          consecutiveEmptySeats = 0;
        }
      }
      return false;
    }
  
    // Iterate through each row to find available seating options for n friends
    for (let i = 0; i < rows; i++) {
      if (hasEnoughSeatsInRow(i, n)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Test cases
  const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  console.log(groupSeats(seatingArrangement1, 2)); 

  