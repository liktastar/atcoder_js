function Main(input) {
  input = input.trim().split("\n");
  let n = parseInt(input[0], 10);
  let set = new Set();
  for (let i = 0; i < n; i++) {
    let user = input[i + 1];
    if (!set.has(user)) {
      set.add(input[i + 1]);
      console.log(i + 1);
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
