/*
const polindrom = (word) => {
  let tersSoz = "";
  for (let i = word.length - 1; i >= 0; i--) {
    tersSoz += word[i];
  }
  return tersSoz === word;
};
const resurt = polindrom("Fatime");
console.log(resurt);
*/

//funksiya yazirsiz bir arqument alsin,soz alsin,hemin sozun icerisinde sait herfleri bize sonda qaytarsin

const saitler = (word) => {
  let _sait = "";
  const sait = "aıouəeiöü";
  for (let i = 0; i <= word.length; i++) {
    if (sait[0] === word[i]) {
      console.log(word[i]);
    }
  }
};
saitler("gulbahar");
