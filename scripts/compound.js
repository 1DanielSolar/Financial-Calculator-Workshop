"use strict";

window.onload = init;
//in order for calculate button to be responsive 
const calcButton = document.getElementById('calculateButton')
    if (calcButton) {
        calcButton.addEventListener('click', calculateMort);
    }

// Function to calculate monthly interest rate from annual rate
function calculateMonthlyInterestRate(annualRate) {
    return (annualRate / 100) / 12;
}

// Function to calculate the total number of payments
function calculateNumberOfPayments(years) {
    return years * 12;
}

// Function to calculate the monthly payment using the formula
function calculateMonthlyPayment(principal, monthlyInterestRate, numberOfPayments) {
    const poweredInterest = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    return (principal * monthlyInterestRate * poweredInterest) / (poweredInterest - 1);
}


//Main function for calculating 
    function calculateMort() {
        const principal = parseFloat(document.getElementById('principal').value);
        const annualRate = parseFloat(document.getElementById('annualRate').value);
        const years = parseInt(document.getElementById('years').value, 10);
        
        const monthlyInterestRate = calculateMonthlyInterestRate(annualRate);
        const numberOfPayments = calculateNumberOfPayments(years);
        const monthlyPayment = calculateMonthlyPayment(principal, monthlyInterestRate, numberOfPayments);
    }    

    document.getElementById('monthlyPayment').innerText = 'Monthly Payment: $' + monthlyPayment.toFixed(2);
