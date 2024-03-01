// Define the function to handle the click event
function handleClick(event) {
    // Get the text content of the clicked element
    const symbol = event.target.textContent;
    // Return or do something with the symbol
    return symbol;
}

// let number;


const numbers = document.querySelectorAll('.numbers');
const number = numbers.forEach(number => {
    number.addEventListener('click', (event) => {

        const clickedNumber = handleClick(event);
        // Your event handling code goes here
        const resultDiv = document.querySelector('.result');



    resultDiv.textContent = clickedNumber
        console.log(clickedNumber); 
        // For example, logging the text content of the clicked element

        return clickedNumber;
    });
});

console.log(number);

const symbols = document.querySelectorAll('.symbols');
// Attach event listeners to each symbol
symbols.forEach(symbol => {
    symbol.addEventListener('click', (event) => {
        // Call the handleClick function passing the event
        const clickedSymbol = handleClick(event);

        const resultDiv = document.querySelector('.result');



    resultDiv.textContent = clickedSymbol;
        console.log(clickedSymbol); // Output the clicked symbol
    });
});








// symbols.forEach(symbol => {
//     symbol.addEventListener('click', () => {
//         // Your event handling code goes here
//         console.log(symbol.textContent); // For example, logging the text content of the clicked element
//     });
// });

operators = ['+', '-', '/', '*', '%'];

equals = '=';


// const result = document.querySelector('.result');
// const signs = document.querySelectorAll('.result span');
// const equals = document.querySelectorAll('equals');
// const clear = document.querySelectorAll('.clear');
// const negative = document.querySelectorAll('.negative');
// const percent = document.querySelectorAll('.percent');


// let firstValue = "";
// let isFirstValue = false;
// let issecondValue = "";
// let isSecondValue = false;
// let sign = "";
// let resultValue = 0;


// for(let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', (e) => {
//         let atr = e.target.getAttribute('value');
//         if(isFirstValue === false) {
//             getFirstValue(atr)
//         }
//     })
// }

// function getFirstValue(el) {
//     result.innerHTML = "";
//     firstValue += el;
//     result.innerHTML = firstValue;
//     firstValue = +firstValue;
// }