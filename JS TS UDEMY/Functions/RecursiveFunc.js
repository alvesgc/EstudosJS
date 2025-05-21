function recursiveFunction(max) {
  if(max >= 10) return;
  max++;
  console.log(max);
  recursiveFunction(max);
}

recursiveFunction(-10);