window.onload="test"
var wins=0
var guesses=15
var alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var currentWord=""
var word = "meow"
var guessed=[]
function loadword(){
    document.getElementById("currentWord").innerHTML = gencurrentWord(guessed, word);   
    document.getElementById("wins").innerHTML = "wins="+wins;
    document.getElementById("guesses").innerHTML = "guesses ="+guesses;
}

document.onkeypress = function(evt) {
    var evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var keypressed = String.fromCharCode(charCode);
    console.log(keypressed)
    guesses=guesses-1
    document.getElementById("guesses").innerHTML = "guesses ="+guesses;
    if (word.includes(keypressed)){
        guessed.push(keypressed)
        currentWord =gencurrentWord(guessed,word)
        console.log(currentWord)
        document.getElementById("currentWord").innerHTML = currentWord;
    }
    else{

    }
}
//document.getElementById("currentWord").innerHTML = word;

//var showwins= doucment.getElementById("wins");
//var showguesses= documents.getElementById("guesses");

function gencurrentWord(guessed, word){
    var result=""
    for (var i=0; i<word.length; i++){
        var letter =word.charAt(i) 
        if (guessed.includes(letter)){
           result=result.concat(letter)

        }
        else {result=result.concat("-")}
    }
    //document.getElementById("currentWord").innerHTML = word;
    return result
}


 


