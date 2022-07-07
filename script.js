let bill = 0;
let tipAmmount = 0;
let tipPercentage = 0;
let totalPerPerson = 0
let numberOfPeople = 0;

const billInput        = document.querySelector("#bill");
const customInput      = document.querySelector(".custom");
const resetButton      = document.querySelector(".tip__button");
const percentButtons   = document.querySelector(".percent");
const numOfPeopleInput = document.querySelector("#people");

billInput.addEventListener("keyup",  function() {
    const inputValue = billInput.value;
    if (isFinite(inputValue)) {
        console.log(inputValue)
    }
});

customInput.addEventListener("keyup",  function() {
    console.log("Custom Tip Percentage");
});

resetButton.addEventListener("click",  function() {
    console.log("Reset Button");
});

percentButtons.addEventListener("click",  function(event) {
    if(event.target.tagName === "BUTTON") {
        tipPercentage = parseInt( event.target.innerHTML.slice(0, -1) );
    }
});

numOfPeopleInput.addEventListener("keyup",  function() {
    console.log("Number of People");
});
