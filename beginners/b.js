function Main(input) {
  input = input.split(" ");
  let a = parseInt(input[0], 10);
  let b = parseInt(input[1], 10);
  if ((a * b) % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
