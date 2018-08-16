var score=0;
var wins=0;
var losses=0;
var aquaVal=generateVal();
var redVal=generateVal();
var greenVal=generateVal();
var pinkVal=generateVal();

var gameNum=randomIntFromInterval(19,120);

console.log("game number is "+gameNum);
console.log("aquaVal "+aquaVal);

$(document).ready(function() {
    
    $("#compGuess").html("<b>"+gameNum+"</b>");    
    $("#aqua").on("click", function() {
        checkGame(aquaVal);
    });
    $("#red").on("click", function() {
        checkGame(redVal);
    });
    $("#green").on("click", function() {
        checkGame(greenVal);
    });
    $("#pink").on("click", function() {
        checkGame(pinkVal);
    });
});

    

function checkGame(val) {
    score = score+val;
    $("#score").html(score);
    console.log("score is "+score);
    if (score === gameNum) {
        messages("You win!");
        wins++;
        $("#wins").html(wins);
        reset();
    } else if (score > gameNum) {
        messages("You lose!");
        losses++;
        $("#loss").html(losses);
        reset();
    }
}

function generateVal() {
    return randomIntFromInterval(1,12);
}
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function reset() {
    score=0;

    aquaVal=generateVal();
    redVal=generateVal();
    greenVal=generateVal();
    pinkVal=generateVal();
    gameNum=randomIntFromInterval(19,120);
    $("#compGuess").html("<b>"+gameNum+"</b>"); 
    $("#score").html("");
}

function messages(message) {
    $("#message").html("<b>"+message+"</b>");
}