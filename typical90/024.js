function Main(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].split(" ").map(s => parseInt(s));
  let aArr = input[1].split(" ").map(s => parseInt(s));
  let bArr = input[2].split(" ").map(s => parseInt(s));

  let diff = 0;
  for (let i = 0; i < n; i++) {
    diff += Math.abs(aArr[i] - bArr[i]);
  }

  if (diff <= k && (k - diff) % 2 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
