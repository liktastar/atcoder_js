function Main(input) {
  input = input.trim().split("\n");
  let n = parseInt(input[0], 10);
  let q = parseInt(input[n+1], 10);

  let one = new Array(n+1).fill(0);
  let two = new Array(n+1).fill(0);

  for (let i = 0; i < n; i++) {
    let [c, p] = input[i+1].split(" ").map(s => parseInt(s, 10));
    one[i+1] += one[i];
    two[i+1] += two[i];
    if (c === 1) {
      one[i+1] += p;
    } else if (c === 2) {
      two[i+1] += p;
    }
  }

  for (let i = 0; i < q; i++) {
    let [l, r] = input[i+n+2].split(" ").map(s => parseInt(s, 10));
    console.log(`${one[r] - one[l-1]} ${two[r] - two[l-1]}`);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
