$(document).ready(function() {

var totalscore = 0;
var wins = 0;
var losses = 0;

// function called: startRound
function startRound() {
// reset totalscore to zero
    var totalscore = 0;
// generate a random number between 19 and 120
    var goal = Math.floor(Math.random() * 120) + 19;
// insert the generated number in the p tag in the randomnumber div
    $("#randomnumber").html(goal);
// generate 4 random numbers to assign to the crystals
    var greenNum = Math.floor(Math.random() * 15) +1;
    var blueNum = Math.floor(Math.random() * 15) +1;
    var orangeNum = Math.floor(Math.random() * 15) +1;
    var pinkNum = Math.floor(Math.random() * 15) +1;
// onclick crystal, it totalscore + colorNum = new totalscore
        $("#greencrystal").on("click", function() {
            console.log(totalscore);
            totalscore = totalscore + greenNum;
            console.log(totalscore);
        });
        $("#bluecrystal").on("click", function() {
            totalscore = totalscore + blueNum;
            console.log(totalscore);
        });
        $("#orangecrystal").on("click", function() {
            totalscore = totalscore + orangeNum;
            console.log(totalscore);
        });
        $("#pinkcrystal").on("click", function() {
            totalscore = totalscore + pinkNum;
            console.log(totalscore);
        });
};
startRound();
// display the = in the total score div
        $("#totalscore").html(totalscore);
    // if the equals is < the randomnumber, continue gameplay
        // if the equals is = the randomnumber, + 1 to wins and restart game
        if (totalscore = randomnumber){
            wins = wins + 1;
            $("#wins").htnl(wins);
            startRound();
        };
        // if the equals i > the randomnumber, + 1 to losses and restart game
        if (totalscore > randomnumber){
            losses = losses + 1;
            $("#losses").html(losses);
            startRound();
        };
});