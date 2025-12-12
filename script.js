// ##################################################
// Fibonacci sequence
// ##################################################

// The Fibonacci sequence is a sequence in which each element is the
// sum of the two elements that procede it.

// Numbers in the sequence are known as Fibonacci numbers, or Fn.

// Example of a sequence, that starts with 0 and 1:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...

// Recursive example:
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// 0, 1, 1, 2, 3, 5

// ##################################################
// Merge Sort
// ##################################################

// In merge sort the idea of the algorithm is to sort smaller arrays
// and then combine those arrays together (merge them) in sorted order.

// Meaning:
// 1. sort the left half of the array (if n > 1)
// 2. sort the right half of the array (if n > 1)
// 3. then merge the two halves together

// Merge sort uses recursion.

// Example of merge sort:

// Array: 5, 2, 1, 3, 6, 4
// sort left half of array
// 5, 2, 1
// sort left half of first array
// (5), 2, 1
// 5, 2, 1
// sort right half of first array
// 5, (2, 1)
// 5, 2, 1
// sort left side of first array right side
// 5, 1, 2
// sort right side of first array right side
// 5, 1, 2
// merge both halfs together
// 1, 2, 5

// sort right half of array
// 3, 6, 4
//sort left half of first array
// (3), 6, 4
// 3, 6, 4
// sort right half of first array
// 3, (6, 4)
// 3, 6, 4
// sort left side of first array right side
// 3, 4, 6
// sort right side of first array right side
// 3, 4, 6
// merge both halfs together
// 3, 4, 6

// Arrays: 1, 2, 5 | 3, 4, 6
// merge arrays together
// 1, 2, 3, 4, 5, 6

// Worst-case scenario:
// You have top split n elements up and then recombine them, effectively
// doubling the sorted subarrays as they are built up.

// Best-case scenario:
// The array is already perfectly sorted, but it will still be split
// up and recombined together by the algorithm

// Time complexity:
// O(n log n)

// ##################################################
// Fibonacci sequence iteratively
// ##################################################

function fibsIte(n) {
  // Return nothing if negative number
  if (n < 0) {
    return [];
  }

  // Return 0 if number is 0
  if (n === 0) {
    return [0];
  }

  // Return 0, 1 if number is 1
  if (n === 1) {
    return [0, 1];
  }

  // First two numbers
  const sequence = [0, 1];

  // Loop to give rest of sequence
  for (let i = 2; i <= n; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }
  // Return completed sequence
  return sequence;
}

// ##################################################
// Fibonacci sequence recursively
// ##################################################

function fibsRec(n) {
  // Return nothing if negative number
  if (n < 0) {
    return [];
  }

  // Return 0 if number is 0
  if (n === 0) {
    return [0];
  }

  // Return 0, 1 if number is 1
  if (n === 1) {
    return [0, 1];
  }

  // Recursion
  const array = fibsRec(n - 1);

  // Get the next number in sequence and push to array
  array.push(array[array.length - 1] + array[array.length - 2]);

  // Return the full sequence
  return array;
}
