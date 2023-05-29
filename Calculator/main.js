function appendNumber(number) {
    document.getElementById('result').value += number;
  }

  function appendOperator(operator) {
    document.getElementById('result').value += operator;
  }

  function calculate() {
    const result = document.getElementById('result').value;
    const answer = eval(result);
    document.getElementById('result').value = answer;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }