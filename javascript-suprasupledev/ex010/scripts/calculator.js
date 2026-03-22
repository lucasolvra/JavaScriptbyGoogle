let calculation = localStorage.getItem('calculation' || '');

calculationText()

function updateCalculation(input) {
  calculation += input;
  calculationText()
  //console.log(calculation);

  localStorage.setItem('calculation', calculation);
}

function calculationText() {
  document.querySelector('.js-update-calculator').innerHTML = calculation;
}