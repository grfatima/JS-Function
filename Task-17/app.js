/*
Stringin içindəki rəqəmləri sayın: 
Bir stringin içindəki rəqəmlərin sayını tapın. 
(Məsələn, "a1b2c3" → 3)
*/

const string = (str) => {
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result++;
    }
  }
  return result;
};
const netice = string("java192273");
console.log(netice);
