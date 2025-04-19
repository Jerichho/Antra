// Jericho Guiang
// JavaScript Practice

// Selected 10: 2,3,4,5,7,10,12,15,16,19

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
    // Remove spaces and make lowercase
    const cleaned = str.replace(/\s+/g, '').toLowerCase();

    // Check if reversed is same
    return cleaned === cleaned.split('').reverse().join('');
}

// 3. Write a JavaScript function that generates all combinations of a string.

function combinations(str) {
    // Intialize empty array to store combinations
    let result = [];

    // Loop through the string
    for (let i = 0; i < str.length; i++) {

        // Loop through the string again to get all combinations
        for (let j = i + 1; j <= str.length; j++) {

            result.push(str.slice(i, j)); // slice from i to j
        }
    }
    return result;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sortAlphabet(str) {
    // Convert string to array, sort it, and join it back to string
    return str.split('').sort().join('');
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function titleCase(str) {
    // Split the string into words, map over each word, and capitalize the first letter
    return str
        .split(' ') // Break string into words
        .map(w => w[0].toUpperCase() + w.slice(1)) // Capitalize first letter
        .join(' '); // Join words back into string
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str) {
    // Use regex to match vowels and return the count
    return str.match(/[aeiou]/gi) ?.length || 0;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identifyMatrix(n) {
    // Create an n x n matrix
    const matrix = [];
    // Loop through n times to create rows
    for (let i = 0; i < n; i++) {

        const row = Array(n).fill(0); // Start with all zeros

        row[i] = 1; // Set diagonal to 1

        matrix.push(row); // Push the row to the matrix
      }
      return matrix;
    }

// 12. Write a JavaScript function which says whether a number is perfect.

function isPerfect(num) {
    // Initialize sum of divisors
    let sum = 0; 
    // Loop through numbers from 1 to num - 1
    for (let i = 1; i < num; i++) {
        
      if (num % i === 0) sum += i; // Add divisors
    }
    return sum === num; // Check if sum of divisors equals the number
  }

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function power(base, exponent) {
    // Use built-in Math.pow
    return Math.pow(base, exponent);  
  }

// 16. Write a JavaScript function to extract unique characters from a string.

function uniqueChars(str) {
    // Use a Set to remove duplicates, then join back to string
    return [...new Set(str)].join('');
  }



// 19. Write a JavaScript function that returns array elements larger than a number.

function largerThan(arr, num) {
    // Keep only values greater than num
    return arr.filter(n => n > num); 
  }

// 23 - 29 questions

// 23. Write a JavaScript function to find the first not repeated character.

function firstNonRepeated(str) {
    // Loop through each character in the string
    for (let char of str) {

      // Check if this character appears only once in the string
      if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null; // Return null if no non-repeated character found
  }

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSortDescending(arr) {
    // Get the length of the array
    let n = arr.length;

    // Loop through the array multiple times
    for (let i = 0; i < n; i++) {

      // Compare adjacent values and swap if out of order
      for (let j = 0; j < n - i - 1; j++) {

        if (arr[j] < arr[j + 1]) { // Swap if the left is less than the right

          // Swap using destructuring
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr; // Return the sorted array
  }

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function longestCountryName(countries) {
    // Compare lengths and return the longest one
    return countries.reduce((a, b) => (a.length > b.length ? a : b));
  }

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestUniqueSubstring(str) {
    // Use a Set to track seen characters
    let seen = new Set(); 

    // Initialize start index, max length, and longest substring
    let start = 0, maxLen = 0, longest = "";
    
    // Loop through the string
    for (let end = 0; end < str.length; end++) {

        // If character is already seen
      while (seen.has(str[end])) {

        // Remove from the beginning until no duplicates
        seen.delete(str[start++]);
      }
      seen.add(str[end]); // Add new character to the set

      // Update longest substring if needed
      if (end - start + 1 > maxLen) {
        // Update max length and longest substring
        maxLen = end - start + 1;
        // Use slice to get the substring
        longest = str.slice(start, end + 1);
      }
    }
    return longest; // Return the longest substring found
  }

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

function longestPalindrome(s) {
    // Initialize max palindrome variable
    let max = "";
    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Loop through the string again to get all substrings
      for (let j = i; j < s.length; j++) {
        // Get the substring from i to j
        let substr = s.slice(i, j + 1);

        // Check if substring is a palindrome
        if (substr === substr.split('').reverse().join('') && substr.length > max.length) {
          max = substr; // Save if it's the longest found so far
        }
      }
    }
    return max; // Return the longest palindrome found
  }

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function greet(name) {
    // Return a greeting message
    return "Hello, " + name;
  }
  // Call the function and pass it as a parameter
  function callFunction(fn, value) {
    return fn(value); // Call the passed function
  }



// 29. Write a JavaScript function to get the function name.

function getFunctionName(fn) {
    return fn.name; // Access the name property of a function
  }
  function exampleFunc() {} // Example function