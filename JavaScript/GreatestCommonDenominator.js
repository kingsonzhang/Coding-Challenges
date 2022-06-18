function GCD(a, b){
    if (!b)
      return a;
    return GCD(b, a % b);
}
  