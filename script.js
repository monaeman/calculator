let input = document.getElementById('output');

function appendNumber(number) {
    input.value += number;
  }
  
  function appendOperator(operator) {
    input.value += operator;
  }
  
  function clearInput() {
    input.value = '';
  }
  
  function calculate() {
    let result = eval(input.value);
    input.value = result;
  }