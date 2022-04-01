function Main(input) {
  let s = input.trim().split("").reverse().join("");
  let arr = ["dream", "dreamer", "erase", "eraser"].map(str => str.split("").reverse().join(""));
  let i = 0;
  while (i < s.length) {
    let flag = true;
    for (word of arr) {
      let substr = s.substring(i, i + word.length);
      if (substr === word) {
        flag = false;
        i += word.length;
        break;
      }
    }
    if (flag) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
