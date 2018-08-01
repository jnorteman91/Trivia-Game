$(document).ready(function() {

    $("#image").css("display", "none");

    var time = 15;
    var rightNumber = 0;
    var wrongNumber = 0;
    var ansNumber = 0;
    var answers = [];
    var question = 0;

    var trivia = [
        q1 = {
            question: "An American skate company founded by George Powell?",
            correct: "2",
            multipleChoice: ["Birdhouse", "Powell Peralta","Zero","Creature"], 
        },
        q2 = {
            question: "A Canadian who skated for Flip, Alien Workshop, Birdhouse, and Circa?",
            correct: "4",
            multipleChoice: ["Colt Cannon", "Sierra Fellers", "Chris Cole", "Mark Appleyard"], 
        },
        q3 = {
            question: "This skateboard company is known for it footwear, it was started by Four Star Distrubution and Chad Muska.",
            correct: "4",
            multipleChoice: ["Osiris", "DC", "Vans", "Circa"], 
        },
        q4 = {
            question: "This skatepark is located in Colorado and is a replica of the Street League competetive course.",
            correct: "1",
            multipleChoice: ["Erie Skatepark", "Boulder Skatepark", "Lyons Skatepark", "Denver Skatepark"], 
        },
        q5 = {
            question: "This show is a documentary of where skaters came from and where they are now.",
            correct: "3",
            multipleChoice: ["King of the Road", "It's Time", "Epicly Later'd", "411 Video Mag"], 
        }
    ];

    var hide = function(elementId) {
        $(elementId).css("visibility", "hidden");
    };

    var show = function(elementId) {
        $(elementId).css("visibility", "visible");
    };

    var write = function(elementId, something) {
        $(elementId).html("<h3>" + something + "</h3>")
    };

    var writeQuestion = function () {
        if (question <= 4) {
            $("#questionDiv").html("<h2>" + trivia[question].question + "</h2>");
            answers = trivia[question].multipleChoice;
            show(".answers");
            for (var i = 0; i < answers.length; i++) {
                $("#answers + i").html("<h3>" + answers[i] + "</h3>"); 
            }
        } else {
            gameEnd();
        }
    };

    var clearAnswer = function () {
        for (var i = 0; i < 4; i++) {
            $("#answer" + i).html("");
        }
        hide(".answer");
    };

    var startGame = function () {
        counter = setInterval(countDown, 1000);
            $("#startTitle").empty();
        hide("#start");
        writeQuestion();
    };

    var screenClear = function () {
        $("#startTitle").empty();
        $("#questionDiv").empty();
        $("#score").empty();
        answerClear();
    }

    var countDown = function () {
        time --;
            $("#timerDiv").html("<h2> Time Remaining: " + time + "</h2>");
        if (timerNum === 0) {
            gameEnd();
        }
    };

    var stop = function () {
        clearInterval(counter);
    };

    var reset = function () {
        stop();
        timerNum = 15;
        answers = [];
        question = 0;
        screenClear();
        $("#timerDiv").empty();
        write("#startTitle", "Press Start!");
        show("#start");
        hide("#reset");
    };

    var gameEnd = function () {
        stop();
        screenClear();

        write("#startTitle", "<h3> Game Over! </h3>");
        $("scoreDiv").append("<h3> Results </h3>");
        $("scoreDiv").append("<h3> Questions Answered " + ansNumber + "</h3>");
        $("scoreDiv").append("<h3> Right Answers " + rightNumber + "</h3>");
        $("scoreDiv").append("<h3> Wrong Answers " + wrongNumber + "</h3>");
        show("#reset");
    };

    var newQuestion = function () {
        $("#image").css("display", "none");
        $("#questionDiv").css("display", "initial");
        $("#ans")
    };

    $("start").on("click", start);
    $("start").on("click", reset);


})