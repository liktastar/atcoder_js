function Main(input) {
  input = input.trim().split("\n");
  let [h, w] = input[0].split(" ").map(s => parseInt(s, 10));

  let matrix = new Array(h);
  for (let i = 0; i < h; i++) {
    matrix[i] = new Array(w).fill(0);
  }
  let sumRow = new Array(h).fill(0);
  let sumCol = new Array(w).fill(0);

  for (let i = 0; i < h; i++) {
    let arr = input[i+1].split(" ");
    for (let j = 0; j < w; j++) {
      let num = parseInt(arr[j], 10);
      sumRow[i] += num;
      sumCol[j] += num;
      matrix[i][j] += num;
    }
  }

  for (let i = 0; i < h; i++) {
    let ans = [];
    for (let j = 0; j < w; j++) {
      ans.push(sumRow[i] + sumCol[j] - matrix[i][j]);
    }
    console.log(ans.join(" "));
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
