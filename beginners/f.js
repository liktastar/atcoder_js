function Main(input) {
  let n, a, b;
  let ans = 0;

  input = input.split("\n");
  [n, a, b] = input[0].split(" ").map((c) => parseInt(c, 10));

  for (let m = 1; m <= n; m++) {
    let sum = 0;
    let tmp_m = m;
    while (tmp_m > 0) {
      sum += tmp_m % 10;
      tmp_m = Math.floor(tmp_m / 10);
    }
    if (sum >= a && sum <= b) {
      ans += m;
    }
  }

  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
