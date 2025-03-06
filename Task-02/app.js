function hesabla(n1, n2, n3) {
  let enBoyukEded = n1;

  if (n2 > enBoyukEded) {
    enBoyukEded = n2;
  }
  if (n3 > enBoyukEded) {
    enBoyukEded = n3;
  }
  console.log(`${enBoyukEded}`);
}
hesabla(12, 19, 14);
