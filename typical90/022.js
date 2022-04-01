function Main(input) {
  let [a ,b, c] = input.trim().split(" ").map(s => BigInt(s));

  let gcd = (x, y) => y === 0n ? x : gcd(y, x % y) ;

  let n = gcd(gcd(a, b), c);
  console.log(String((a + b + c) / n - 3n));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
