/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
// function isPrime(n) 
const isPrime = (n) => {
    if (n <= 1 || !Number.isInteger(n)) {
        return false;
      }
      
      for (let i = 2; i < n; i++) {
        // console.log(i)
        if (n % i === 0) {
            
          return false; // Jika bisa dibagi, bukan bilangan prima
        }
      }
      
      return true;
  }
  
  
  console.log(isPrime(10));
  console.log(isPrime(43));
  console.log(isPrime(11.5));

//   let start = performance.now()
//   isPrime(2_000_000_000)
//   let end = performance.now()

//   console.log(`${end - start}`);

