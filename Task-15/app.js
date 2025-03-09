//funksiya yazirsiz bir arqument alsin,soz alsin,hemin sozun icerisinde sait herfleri bize sonda qaytarsin

const saitler = (word) => {
  let _sait = "";
  const sait = "aıouəeiöü";
  for (let i = 0; i < word.length; i++) {
    if (sait.includes(word[i])) {
      _sait += word[i];
    }
  }
  return _sait;
};
const resurt = saitler("gulbahar");
console.log(resurt);