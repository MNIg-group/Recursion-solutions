// Using iteration Method:
let result = [];
result[0] = 0;
result[1] = 1;

function fibs(num) {
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  console.log("By iteration method: ", result);
}

// Using Recursion Method:

function fibsRec(num) {
  if (num <= 0 || num == 1) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}
function checkRecursiveArr(nTerms) {
  let recursiveArr = [];

  for (let i = 0; i < nTerms; i++) {
    recursiveArr.push(fibsRec(i));
  }
  console.log("By Recursive method: ", recursiveArr);
}

// Display output:
fibs(8);
checkRecursiveArr(8);
