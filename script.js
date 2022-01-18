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
    if (principal <= 0){
      alert('Please enter a positive Number')
      document.forms["form"]['principal'].focus()
      return false;
    }
    let result = (principal * (interestRate/100)) * years;
    console.log(interestRate/100)
    document.getElementById('result').innerHTML = 
    `If you deposit <span>${principal}</span>,<br>at an interest rate of <span>${interestRate}%</span>.<br>You will receive an amount of <span>${result.toFixed(0)}</span>,<br>in the year <span>${2022+parseInt(years)}</span>`;
    
  };

