let add, minus, times, divide, fnumber, snumber, answer, arithemetric;

add = "+";
minus = "-";
times = "*";
divide = "/";

fnumber = parseInt(prompt("Can i get a digit(s) from you"));
snumber = parseInt(prompt("Can i get another digit(s) from you "));
arithemetric = prompt("What sign do you want to use (+, -, *, /)");

if (fnumber == "NaN" || snumber == "NaN") {
  alert(`Your number isn't a number`);
} else {
  switch (arithemetric) {
    case "+":
      answer = fnumber + snumber;
      break;
    case "-":
      answer = fnumber - snumber;
      break;
    case "*":
      answer = fnumber * snumber;
      break;
    case "/":
      answer = fnumber / snumber;
      break;
    default:
      alert("You didn't pick the right symbol");
      answer = "There was an error";
      break;
  }

  alert(`The answer is ${answer}`);
}
