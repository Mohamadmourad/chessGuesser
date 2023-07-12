let letter = 'a';
let letters = ['a','b','c','d','e','f','g','h']
let number = 1;
let correctAnswear ='';
let score = 0;
let timeBetween = 500;

function answear(answear){
if((letter == 'a' || letter == 'c' || letter == 'e' || letter == 'g') && number%2 == 0){
    correctAnswear ='white';
}
else if((letter == 'a' || letter == 'c' || letter == 'e' || letter == 'g') && number%2 != 0){
    correctAnswear ='black';
}
else if((letter == 'b' || letter == 'd' || letter == 'f' || letter == 'h') && number%2 == 0){
    correctAnswear ='black';
}
else if((letter == 'b' || letter == 'd' || letter == 'f' || letter == 'h') && number%2 != 0){
    correctAnswear ='white';
}
//check if right or wrong
if(answear == correctAnswear){
    document.getElementById('currentScore').innerHTML = ++score;
    if(answear == 'white'){
    document.getElementById('white').style.backgroundColor = 'green';
    setTimeout(white,timeBetween);
    }

    else{
        document.getElementById('black').style.backgroundColor = 'green';
        setTimeout(black,timeBetween); 
    }
}
else{//if the answear is wrong
    if(answear == 'white'){
        document.getElementById('white').style.backgroundColor = 'red';
        setTimeout(white,timeBetween);
        }
    
        else{
            document.getElementById('black').style.backgroundColor = 'red';
            setTimeout(black,timeBetween); 
        }
}
//now we need to change the square
setTimeout(newGuess,timeBetween); 
}

function newGuess(){
    number = Math.floor(Math.random() * 8) + 1;
    letter = letters[Math.floor(Math.random() * 8)];
    document.getElementById('guessedNum').innerHTML=letter + number;
} 

function white(){
    document.getElementById('white').style.backgroundColor = 'white';
}

function black(){
    document.getElementById('black').style.backgroundColor = 'black';
}

