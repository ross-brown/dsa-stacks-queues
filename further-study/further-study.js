const Queue = require("../queue");
const Stack = require("../stack");



// "Write a function that reverses a string by handling one letter at a time."
// "You cannot use an arrays, nor can you use any string-reversal built-in method."

function stringReversal(str) {
  const letterStack = new Stack();
  let reversed = "";

  for (const letter of str) {
    letterStack.push(letter);
  }

  while (letterStack.size !== 0) {
    reversed += letterStack.pop();
  }

  return reversed;
}

function balancedBrackets(str) {
  const bracketStack = new Stack();

  const brackets = {
    "{": "}",
    "(": ")",
    "[": "]"
  };

  for (const char of str) {
    if (char === "{" || char === "(" || char === "[") {
      bracketStack.push(char);
    } else if (char === "}" || char === ")" || char === "]") {
      if (brackets[bracketStack.peek()] === char) {
        bracketStack.pop();
      } else {
        return false;
      }
    }
  }

    return bracketStack.isEmpty();
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
