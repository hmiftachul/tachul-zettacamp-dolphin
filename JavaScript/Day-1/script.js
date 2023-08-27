// 1. Declare two variable with name of your favourite books
let favoriteBook1 = "Habbits";
const favoriteBook2 = "Nasehat Diri";
//   a. Update value of first with name your least favourite book
favoriteBook1 = "Sophie";
console.log("Buku 1: " + favoriteBook1);

try {
  // b. Define second variable as constant and try update the value
  favoriteBook2 = "Makna Sholat"; // Ini akan menghasilkan error
  console.log("Buku 2: " + favoriteBook2);
} catch (e) {
  console.log("Terjadi kesalahan:", e.message);
}

console.log("Buku 2: " + favoriteBook2);
// 2. Concat value from variables task number 1 into new variable
// let concatBooks = favoriteBook1 + " and " + favoriteBook2;
// let concatBooks = `${favoriteBook1} and ${favoriteBook2}`;
console.log(favoriteBook1.concat(favoriteBook2))
// console.log(concatBooks);
// Note:
// Try declare more variable using other data type with dynamic value and primitive value
let intVariable = 42;
let floatVariable = 3.14;
let booleanVariable = true;
let arrayVariable = [1, 2, 3, 4, 5];
let objectVariable = { key1: "value1", key2: "value2" };

console.log(typeof intVariable);
console.log(typeof floatVariable);
console.log(typeof booleanVariable);
console.log(typeof arrayVariable);
console.log(typeof objectVariable);


let Orang = {
  nama: "Tachul",
  umur: null,
  hobi: ["Kulineran", "Explore Tempat", "Traveling"],
  status: "Single",
};

let hobiString = Orang.hobi.join(", "); // menggunakan metode .join() untuk menggabungkan elemen-elemen dalam array hobi menjadi sebuah string

console.log(
  `Nama ${Orang.nama}, umur ${Orang.umur}, punya hobi banyakk diantaranya ${hobiString} status udah ${Orang.status} sama Tachul`
);

function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 7);
console.log(result)
