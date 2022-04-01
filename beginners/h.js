function Main(input) {
  input = input.trim().split("\n");
  input.shift();

  let arr = input.map((c) => parseInt(c, 10));
  let set = new Set(arr);
  console.log(set.size);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
