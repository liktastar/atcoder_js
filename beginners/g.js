function Main(input) {
  let arr;
  let ans = 0;

  input = input.split("\n");
  arr = input[1].split(" ").map((c) => parseInt(c, 10)).sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    ans += arr[i] * (i % 2 === 0 ? 1 : -1);
  }

  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
