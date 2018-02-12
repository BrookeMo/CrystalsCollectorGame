$(document).ready(function() {

var randomnumber = 0;
var totalscore = 0;
var wins = 0;
var losses = 0;

// generate a random number at the beginning of a round
// function called: startRound
// generate a random number between 19 and 120
    var goal = Math.floor(Math.random() * 120) + 19;
// insert the generated number in the p tag in the randomnumber div
        // $(".randomnumber").html(randomnumber);
// generate 4 random numbers to assign to the crystals
    var blueNum = Math.floor(Math.random() * 20) +1;
    var greenNum = Math.floor(Math.random() * 20) +1;
    var orangeNum = Math.floor(Math.random() * 20) +1;
    var pinkNum = Math.floor(Math.random() * 20) +1;
// do the same for blue orange and pink
// onclick crystal, it 0 + random number =
        $("#greencrystal").on("click", function() {

        });
        $("#bluecrystal").on("click", function() {

        });
        $("#orangecrystal").on("click", function() {

        });
        $("#pinkcrystal").on("click", function() {

        });
// display the = in the total score div
        // $("#totalscore").html(totalscore);
    // if the equals is < the randomnumber, continue gameplay
    // if the equals is = the randomnumber, + 1 to wins and restart game
    // if the equals i > the randomnumber, + 1 to losses and restart game

});