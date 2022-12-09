function handleClick() {
  let string = document.getElementById("input-text").value;
  console.log(string);
  console.log(document.getElementById("input-text").value);
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
    console.log(reversedString);
  }
  if(string === reversedString){
    document.getElementById("result-text").innerHTML = `${string} is a palindrome.`;
  } else {
    document.getElementById("result-text").innerHTML = `${string} is not a palindrome.`;
  }

  
  console.log(reversedString);
}

document.getElementById("submit-button").addEventListener("click", handleClick);
