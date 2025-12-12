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
