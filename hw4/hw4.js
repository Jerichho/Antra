// Jericho Guiang
// Array Method Practice

// Map Method

Array.prototype.myMap = function(cb) {
    let result = [] // Store the result of the map

    for (let i = 0; i < this.length; i++) { // Loop through the array
        result.push(cb(this[i], i, this)); // Call the callback function on each element
    }
    return result // Return the result
};


// Filter Method

Array.prototype.myFilter = function(cb) {
    let result = [] // Store the result of the filter

    for (let i = 0; i < this.length; i++) { // Loop through the array
        if (cb(this[i], i, this)) { // If the callback function returns true
            result.push(this[i]); // Push the element to the result
        }
    }
    return result; // Return the result
};


// Reduce Method

Array.prototype.myReduce = function(cb, initVal) {
    let accumulator = initVal; // Store the accumulated value
    let start = 0; // Start index for the loop

    if (accumulator === undefined) { // If no initial value is provided
        accumulator = this[0]; // Set the accumulator to the first element
        start = 1; // Start the loop from the second element
    }

    for (let i = start; i < this.length; i++) { // Loop through the array
        accumulator = cb(accumulator, this[i], i, this); // Call the callback function on each element
    }

    return accumulator; // Return the accumulated value
};



// Includes Method

Array.prototype.myIncludes = function(val) {
    for (let i = 0; i < this.length; i++) { // Loop through the array
      if (this[i] === val) return true; // If the value is found, return true
    }
    return false; // If the value is not found, return false
  };


// Find Method

Array.prototype.myFind = function(cb) {
    for (let i = 0; i < this.length; i++) { // Loop through the array
      if (cb(this[i], i, this)) return this[i]; // If the callback function returns true, return the element
    }
    return undefined; // If no element is found, return undefined
  };


// Slice Method

Array.prototype.mySlice = function(start = 0, end = this.length) {
    let result = []; // Store the sliced elements
  
    // Handle negative indices
    let realStart = start < 0 ? this.length + start : start; // Convert negative start index
    let realEnd = end < 0 ? this.length + end : end; // Convert negative end index
  
    for (let i = realStart; i < realEnd && i < this.length; i++) { // Loop through the array
      result.push(this[i]); // Push the sliced elements to the result
    }
  
    return result; // Return the sliced array
  };