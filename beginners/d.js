function Main(input) {
  input = input.split("\n");
  let arr = input[1].split(" ").map(c => parseInt(c, 10));
  let ans = Number.MAX_SAFE_INTEGER;
  for (a of arr) {
    let tmp_a = a;
    let count = 0;
    while ((tmp_a & 1) === 0) {
      count += 1;
      tmp_a >>= 1;
    }
    ans = Math.min(ans, count);
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
