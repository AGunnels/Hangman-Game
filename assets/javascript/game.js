prompt('Press any key to get started!');

let underscoreDocument = document.getElementsByClassName("underscore");
let rightGuessDocument = document.getElementsByClassName("rightGuess");
let wrongGuessDocument = document.getElementsByClassName("wrongGuess");

//Create word array 
const words = [
    'Footloose',
    'Tremors',
    'Sleepers',
    'Flatliners',
    'Ren',
    'Quicksilver',
    'JFK',
    'Norwood'];

//Choose random words
//const startGame;
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let rightGuess = [];
let wrongGuess = [];
let underscore = [];
for (let i = 0; i < chosenWord.length; i++) {
    underscore.push('_ ');
}
underscoreDocument[0].innerHTML = underscore.join('');
let count = 0;

console.log(chosenWord);

function startUp() {
    //startGame;
    }

// generateUnderscores();

//HTML Dom : https://www.w3schools.com/js/js_htmldom_elements.asp


// //Create underscores

// let generateUnderscore = () => {
//     for (let i = 0; i < chosenWord.length; i++) {
//         underscore.push('_ ');
      
//     }
//     return (underscore);
// }

// console.log(generateUnderscore());

// //Get user guess
   //Check for user right or wrong guesses
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    console.log(keyword);
    console.log(chosenWord.indexOf(keyword) !== -1);
    if(chosenWord.indexOf(keyword) !== -1){
        rightGuess.push(keyword);
        underscore[chosenWord.indexOf(keyword)] = keyword;
        underscoreDocument[0].innerHTML = underscore.join('');
        rightGuessDocument[0].innerHTML = rightGuess;
        if (underscore.join('')=== chosenWord){
            alert("YOU WIN!");
        }
    }else{
        wrongGuess.push(keyword);
        wrongGuessDocument[0].innerHTML = wrongGuess;
            if (wrongGuess.length === 15){
                alert("You are terrible!");
                
            }
    }

    
});



