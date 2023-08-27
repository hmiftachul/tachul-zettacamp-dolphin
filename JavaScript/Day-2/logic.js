/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */
function max_of_two(a, b) {
    // if (a > b) {
    //   return a
    // } else {
    //   return b
    // }
    return a > b ? a : b
  };
  
  console.log(max_of_two(10, 5));
  console.log(max_of_two(45, 66));
  
  // Able to assign new key into object
  
  let person = {
    name: 'adi',
    age: null
  }
  
  person.last = 'dian';
  person['hobi'] = 'mingswim';
  
  console.log(person);
  
  
  // Able to push an object into existing array
  let girls = [
    {name: 'Aida', age: 21},
    {name: 'Amanda', age: 21}
    ];
    
  let newGirl = {name: 'Arin', age: 22};
  girls.push(newGirl);
  console.log(girls)
  
  // Able to do mathematics operation
  let plus = 2 + 2;
  let min = 7 - 2;
  let devider = 8 / 3;
  let multi = 5 * 5;
  let mod = 9 % 4;
  let exponent = 5 ** 2
  
  console.log(plus)
  console.log(min)
  console.log(devider)
  console.log(multi)
  console.log(mod)
  console.log(exponent)