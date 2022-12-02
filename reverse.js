function
 reverse(array) {
  let output = [];
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}
