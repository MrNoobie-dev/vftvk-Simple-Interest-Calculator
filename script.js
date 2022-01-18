window.addEventListener('load', function () {
    let rate = document.forms["form"]['rate'];
    let output = document.getElementById('output');
    output.innerHTML = rate.value+"%";
    rate.oninput = function() {
        output.innerHTML = this.value+"%";
      };
  });

  function compute(e)
  {
    e.preventDefault();
    let principal = document.forms["form"]['principal'].value;
    let interestRate = document.forms["form"]['rate'].value;
    let years = document.forms["form"]['year'].value;
    let result = (principal * (interestRate/100)) * years;
    console.log(interestRate/100)
    document.getElementById('result').innerHTML = 
    `If you deposit ${principal},<br>at an interest rate of ${interestRate}%.<br>You will receive an amount of ${result.toFixed(0)},<br>in the year ${2022+parseInt(years)}`;
  };

