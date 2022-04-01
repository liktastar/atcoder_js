function Main(input) {
  let [n, y] = input.trim().split(" ").map(c => parseInt(c, 10));

  for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n - a; b++) {
      let c = n - a - b;
      if (10000 * a + 5000 * b + 1000 * c === y) {
        console.log(`${a} ${b} ${c}`);
        return;
      }
    }
  }
  console.log("-1 -1 -1");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
