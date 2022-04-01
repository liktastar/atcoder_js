function Main(input) {
  let ans = input.trim().split("").map(c => parseInt(c, 10)).reduce((prev, cur) => prev + cur);
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
