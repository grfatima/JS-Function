/*
Verilmiş stringdəki bütün rəqəmləri silin.
Məsələn:
"123hello456" → "hello"
"abc123xyz" → "abcxyz"
*/

const string = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      result += str[i];
    }
  }
  return result;
};
const netice = string("12java34");
console.log(netice);
