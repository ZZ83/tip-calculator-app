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

function addActiveClass(element) {
    element.classList.add("active");
}

function removeActiveClass() {
    const sortItems = document.querySelectorAll(".btn");
    sortItems.forEach(item => {
        item.classList.remove("active");
    })
};

resetButton.addEventListener("click",  function() {
    console.log("Reset Button");
});

billInput.addEventListener("keyup",  function() {
    const inputValue = billInput.value;
    if (isFinite(inputValue)) {
        console.log(inputValue)
    }
});

customInput.addEventListener("keyup",  function() {
    tipPercentage = parseInt(customInput.value);
    tipPercentage = tipPercentage / 100;
    console.log(tipPercentage);
});

percentButtons.addEventListener("click",  function(event) {
    removeActiveClass();
    if(event.target.tagName === "BUTTON") {
        addActiveClass(event.target);
        tipPercentage = parseInt( event.target.innerHTML.slice(0, -1) );
        tipPercentage = tipPercentage / 100;
        console.log(tipPercentage);
    }
});

numOfPeopleInput.addEventListener("keyup",  function() {
    console.log(numOfPeopleInput.value0);
});


