const numbers = [];
let validNumber = false;

while (!validNumber) {
  const input = prompt("Enter a number");
  const resultText = "The average of the numbers you have entered is ";
  if (input != -1) {
    numbers.push(input);
    console.log(numbers);
  }
  if (input == -1) {
    console.log("done");
    let averageNumber =
      numbers.reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue)) / numbers.length;
    document.getElementById("total-output").innerHTML = `${resultText} ${averageNumber}`;
    console.log(averageNumber);
    validNumber = true;
  }
}
