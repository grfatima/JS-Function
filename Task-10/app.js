function number(a) {
  if (a > 0) {
    console.log("reqem musbetdir");
  } else if (a < 0) {
    console.log("reqem menfidir");
  } else {
    console.log("reqem sifirdir");
  }
}
let a = +prompt("reqem daxil edin");
number(a);
