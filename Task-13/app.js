function ebob(n1, n2) {
  let _ebob = 0;
  let enBoyukEded = n1;
  if (n2 > n1) {
    enBoyukEded = n2;
  }
  for (let i = enBoyukEded; i >= 1; i--) {
    if (!(n1 % i) && !(n2 % i)) {
      _ebob = i;
      break;
    }
  }
  return _ebob;
}
const result = ebob(16, 32);
console.log(result);
