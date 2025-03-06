function ededler(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  }
}
const result = ededler(200, 10);
console.log(result);
