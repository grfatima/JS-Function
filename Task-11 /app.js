function isPerfect(n) {
  let cem = 0;
  for (let i = n - 1; i >= 1; i--) {
    if (!(n % i)) {
      cem += i;
    }
  }
  return cem === n;
}
const result = isPerfect(6);
console.log(result);
