function Main(input) {
  input = input.trim().split("\n");
  input.shift();

  let arr = input.map(str =>
    str.split(" ").map(s => parseInt(s, 10))
  ).sort((a, b) =>
    a[0] - b[0]
  );

  let [prevT, prevX, prevY] = [0, 0, 0];
  for (let [t, x, y] of arr) {
    let time = t - prevT;
    let dist = Math.abs(x - prevX) + Math.abs(y - prevY);

    if (time < dist || (time - dist) % 2 === 1) {
      console.log("No");
      return;
    }

    [prevT, prevX, prevY] = [t, x, y];
  }

  console.log("Yes");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
