function ayGunler(ay) {
  switch (ay) {
    case "yanvar":
    case "mart":
    case "may":
    case "iyul":
    case "avqust":
    case "oktyabr":
    case "dekabr":
      console.log(`${ay} ayi 31 gundur.`);
      break;
    case "aprel":
    case "iyun":
    case "sentyabr":
    case "noyabr":
      console.log(`${ay} ayi 30 gundur.`);
      break;
    case "fevral":
      console.log(`${ay} ayi 28 gundur.`);
      break;
    default:
      console.log("zehmet olmasa duzgun ay adi daxil edin");
  }
}
let ayAdi = prompt("ay adi daxil edin;");
ayGunler(ayAdi);
