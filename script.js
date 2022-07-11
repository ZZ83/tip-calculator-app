let bill = 0;
let tipAmmount = 0;
let tipPercentage = 0;
let totalPerPerson = 0
let numberOfPeople = 1;

const billInput        = document.querySelector("#bill");
const customInput      = document.querySelector(".custom");
const resetButton      = document.querySelector(".tip__button");
const percentButtons   = document.querySelector(".percent");
const numOfPeopleInput = document.querySelector("#people");


//FUNCTIONS ------------------------------------------------------------------------
function addActiveClass(element) {
    element.classList.add("active");
}

function removeActiveClass() {
    const sortItems = document.querySelectorAll(".btn");
    sortItems.forEach(item => {
        item.classList.remove("active");
    })
};

function validate(event) {
    const t = event.value;
    event.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

//EVENT LISTENERS ------------------------------------------------------------------
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
    if (isFinite(numOfPeopleInput.value)) {
        console.log(numOfPeopleInput.value)



        if(numOfPeopleInput.value === "0" ) {
            showError();
            console.log("Please type a number Greater then 0");
            numOfPeopleInput.setAttribute("maxlength", "1")
        }
      7
    }
});

resetButton.addEventListener("click",  function() {
    console.log("Reset Button");
});








































function validCharatersOnly(input) {
    // Prevents unvalid charaters from being typed into the input field
    const splitValue     = input.value.split('');
    const validCharaters = new RegExp('\\d|\\.');
    const filteredSplitValue = splitValue.map(function(character) {
        if(!validCharaters.test(character)) {
            return '';
        }
        return character;
    });
    
    let x = filteredSplitValue.join('');

    if (x[0] === "." && x[x.length -1] === "." && x.length > 1) {
        x = x.slice(0, -1);
        input.value = x.join("");
    } else if (x[x.length -1] === "." && x[0] !== ".") {
        let y = x.slice(0, -1);
        if(y.includes(".")) {
            x = x.slice(0, -1);
            input.value = x.join("");
        }
    }
}




function checkIfEmpty()  {
    if(numOfPeopleInput.value === "" || numOfPeopleInput.value === 0) {
        console.log("Show Error Message");
    }
}

function showError() {
    numOfPeopleInput.style.border = "2px solid #E17457";
    numOfPeopleInput.previousElementSibling.classList.add("error");
    numOfPeopleInput.previousElementSibling.firstElementChild.style.display = "initial";
}









  
billInput.addEventListener("input", function(event) {
    validate(billInput);
    validCharatersOnly(billInput)

    checkIfEmpty();
    showError();

});




 




















































































































// function numbersOnly(inputVal) {
//     var digitPeriodRegExp = new RegExp('\\d|\\.');
//     var splitValue = inputVal.value.split('');
//     var charactersToFilter = 0;
//     var filteredSplitValue = splitValue.map(function(character) {
//         if(!digitPeriodRegExp.test(character)) {
//             charactersToFilter++;
//             return '';
//         }
//         return character;
//     });
//     if(!charactersToFilter) {
//         return;
//     }
//     inputVal.value = filteredSplitValue.join('');
// }


// function preventInvalidCharaters(event) { 
//     const invalidChararaters = ["-", "+", "e", "E"];
//     if (invalidChararaters.includes(event.key)) {
//         event.preventDefault();
//     }
// }



// billInput.addEventListener("input",  function(event) {
//     const inputValue = billInput.value;
//     if (isFinite(inputValue)) {
//         console.log(inputValue)
//         billInput.value = inputValue;
//     }

// });


// const invalidChararaters = ["-", "+", "e", "E"];
// var splitValue = inputVal.value.split('');
// var filteredSplitValue = splitValue.map(function(character) {
//     if(!invalidChararaters.includes(character)) {
    
//         console.log(character);
//         // return character;
//     }
// });