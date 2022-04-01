function Main(input) {
  input = input.split("\n");
  let a = parseInt(input[0], 10);
  let b = parseInt(input[1], 10);
  let c = parseInt(input[2], 10);
  let x = parseInt(input[3], 10);
  let ans = 0;
  for (let num_a = 0; num_a <= a; num_a++) {
    for (let num_b = 0; num_b <= b; num_b++) {
      let num_c = Math.floor((x - 500 * num_a - 100 * num_b) / 50);
      if (num_c >= 0 && num_c <= c && 500 * num_a + 100 * num_b + 50 * num_c === x) {
        ans += 1;
      }
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
