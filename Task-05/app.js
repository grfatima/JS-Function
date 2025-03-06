function isLucky(n1, n2, n3, n4, n5, n6) {
  if (n1 + n2 + n3 == n4 + n5 + n6) {
    return true;
  } else {
    return false;
  }
}
const result = isLucky(2, 2, 2, 4, 1, 1);
console.log(result);
