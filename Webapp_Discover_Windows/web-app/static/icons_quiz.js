// Import the Javascript modules to exchange messages with a server.
import Ajax from "./ajax.js";

//Set variables
let real_answer;
let answered = true;
let Score = 0;
let Nb_questions = 0;
let level;
let can_start = false;
let current_level;
let motiv_message;
let questions_asked = [];
const possible_locations = ["answer1", "answer2", "answer3", "answer4"];
const initial_message = (
    "This quiz has 10 questions. " +
    "Click on the difficulty you want, then click Start."
);

//Retrieve all elements from HTML page needed.
const next_button = document.getElementById("next_button");
const result_button = document.getElementById("result_button");
const start_button = document.getElementById("start_button");
const easy_level_button = document.getElementById("easy_level");
const medium_level_button = document.getElementById("medium_level");
const hard_level_button = document.getElementById("hard_level");
const icon_question = document.getElementById("icon_question");
const monitor_information = document.getElementById("monitor_information");
const right_image = document.getElementById("right_image");
const wrong_image = document.getElementById("wrong_image");
const HTML_easy_score = document.getElementById("easy_score");
const HTML_medium_score = document.getElementById("medium_score");
const HTML_hard_score = document.getElementById("hard_score");
const motivation_message = document.getElementById("motivation_message");
const HTML_current_level = document.getElementById("current_level");


//Set for easy level
easy_level_button.onclick = function () {
    easy_level_button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";
    medium_level_button.style.boxShadow = "none";
    hard_level_button.style.boxShadow = "none";
    //Adjust variables
    current_level = "easy";
    level = {
        answer_index: 0,
        answer_type: "text_",
        question_index: 1
    };
    can_start = true;
};

//Set for medium level
medium_level_button.onclick = function () {
    medium_level_button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";
    easy_level_button.style.boxShadow = "none";
    hard_level_button.style.boxShadow = "none";
    //Adjust variables
    current_level = "medium";
    level = {
        answer_index: 2,
        answer_type: "image_",
        question_index: 0
    };
    can_start = true;
};

//Set for hard level
hard_level_button.onclick = function () {
    hard_level_button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";
    easy_level_button.style.boxShadow = "none";
    medium_level_button.style.boxShadow = "none";
    //Adjust variables
    current_level = "hard";
    level = {
        answer_index: 1,
        answer_type: "text_",
        question_index: 2
    };
    can_start = true;
};


//Display the initial message
function set_initial_message() {
    monitor_information.innerHTML = initial_message;
    monitor_information.style.fontSize = "2vw";
    monitor_information.style.top = "35%";
}

//Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

//Reset monitor display for for next question
function reset_right_wrong() {
    right_image.style.opacity = "0";
    wrong_image.style.opacity = "0";
    monitor_information.style.top = "50%";
    icon_question.style.width = "80%";
    icon_question.style.left = "10%";
    easy_level_button.style.opacity = 0;
    medium_level_button.style.opacity = 0;
    hard_level_button.style.opacity = 0;
}

//Change color of answers according to their type
function make_grey(what) {
    if (level.answer_index === 1) {
        what.style.filter = (
            "invert(16%) sepia(2%) saturate(980%) " +
            "hue-rotate(314deg) brightness(103%) contrast(86%)"
        );
    } else {
        what.style.color = "rgb(56, 55, 54)";
    }
}
function make_red(what) {
    if (level.answer_index === 1) {
        what.style.filter = (
            "invert(63%) sepia(42%) saturate(6865%) " +
            "hue-rotate(329deg) brightness(94%) contrast(93%)"
        );
    } else {
        what.style.color = "rgb(232, 90, 79)";
    }
}
function make_green(what) {
    if (level.answer_index === 1) {
        document.getElementById(what).style.filter = (
            "invert(21%) sepia(99%) saturate(2986%) " +
            "hue-rotate(143deg) brightness(96%) contrast(101%)"
        );
    } else {
        document.getElementById(what).style.color = "rgb(0, 141, 54)";
    }
}

//Display the question on the monitor
function display_question(response) {
    //Retreive the question
    let question = response.icons_quiz.question_answer[level.question_index];
    //Find out the format needed for the question and adapt it to fit
    if (level.question_index === 0) {
        monitor_information.style.opacity = "1";
        monitor_information.style.fontSize = "4vw";
        icon_question.style.opacity = "0";
        monitor_information.innerHTML = question;
    } else if (level.question_index === 2) {
        monitor_information.style.opacity = "1";
        icon_question.style.opacity = "0";
        monitor_information.innerHTML = question;
        monitor_information.style.fontSize = "2vw";
    } else if (level.question_index === 1) {
        monitor_information.style.opacity = "0";
        icon_question.style.opacity = "1";
        icon_question.src = question;
    }
}

//Function to display the 4 possible answers
function display_answers(question, response, location) {
    //Retreive the other possible answers
    let other1 = response.icons_quiz.other1[level.answer_index];
    let other2 = response.icons_quiz.other2[level.answer_index];
    let other3 = response.icons_quiz.other3[level.answer_index];
    //Find out the format needed for the answer and place them randomly
    if (level.answer_index === 1) {
        possible_locations.forEach(function (element) {
            document.getElementById("image_" + element).style.opacity = "1";
            document.getElementById("image_" + element).style.zIndex = "1";
            document.getElementById("text_" + element).style.opacity = "0";
            document.getElementById("text_" + element).style.zIndex = "-1";
            make_grey(document.getElementById("image_" + element));
        });
        document.getElementById("image_" + location[0]).src = question;
        document.getElementById("image_" + location[1]).src = other1;
        document.getElementById("image_" + location[2]).src = other2;
        document.getElementById("image_" + location[3]).src = other3;
    } else if (level.answer_index === 0) {
        possible_locations.forEach(function (element) {
            document.getElementById("text_" + element).style.fontSize = "2.5vw";
            document.getElementById("text_" + element).style.opacity = "1";
            document.getElementById("image_" + element).style.zIndex = "-1";
            document.getElementById("text_" + element).style.zIndex = "1";
            make_grey(document.getElementById("text_" + element));
        });
        document.getElementById("text_" + location[0]).innerHTML = question;
        document.getElementById("text_" + location[1]).innerHTML = other1;
        document.getElementById("text_" + location[2]).innerHTML = other2;
        document.getElementById("text_" + location[3]).innerHTML = other3;
    } else if (level.answer_index === 2) {
        possible_locations.forEach(function (element) {
            document.getElementById("text_" + element).style.fontSize = "1.5vw";
            document.getElementById("text_" + element).style.opacity = "1";
            document.getElementById("image_" + element).style.zIndex = "-1";
            document.getElementById("text_" + element).style.zIndex = "1";
            make_grey(document.getElementById("text_" + element));
        });
        document.getElementById("text_" + location[0]).innerHTML = question;
        document.getElementById("text_" + location[1]).innerHTML = other1;
        document.getElementById("text_" + location[2]).innerHTML = other2;
        document.getElementById("text_" + location[3]).innerHTML = other3;
    }
}

//Build the question
function make_next_question() {
    //Ask the server for a set of question and response
    Ajax.query().then(function (response) {
        let question = response.icons_quiz.question_answer[level.answer_index];
        //Check the question hasn't already been asked.
        if (questions_asked.includes(question) === false) {
            questions_asked.push(question);

            //Shuffle the location of answers to place them randomly
            let location = shuffle(possible_locations);
            if (level.answer_index === 1) {
                real_answer = "image_" + location[0];
            } else {
                real_answer = "text_" + location[0];
            }

            //Display the question and answers in the correct location
            //(depends with level)
            display_answers(question, response, location);
            display_question(response);
        } else { //if the question has already been asked, repeat.
            make_next_question();
        }
    });
}


//Start the next question when button Next clicked
next_button.onclick = function () {
    //Check the question has been answered,
    //the quiz has started but isn't finished
    if (answered === true && Nb_questions < 10 && can_start === true) {
        start_button.style.opacity = "0";
        reset_right_wrong();
        //Get set of question and answer from server and display them.
        make_next_question();
        next_button.style.opacity = "0";
        answered = false;
    }
};




//Display the initial message on the monitor
set_initial_message();

//Constant function
document.onmousemove = function () {
    //Retrieve the HTML button object hovered upon. (answer element)
    let button_id = JSON.parse(window.sessionStorage.getItem("Icons_quiz"));
    const button = document.getElementById(button_id);

    //Display score
    let display_score = Score + "/" + Nb_questions;
    document.getElementById("score").innerHTML = display_score;

    //Make answer element red when mouse hovers on them
    button.onmousemove = function () {
        if (answered === false) {
            make_red(button);
        }
    };

    //Make answer element grey when mouse leaves
    button.onmouseleave = function () {
        if (answered === false) {
            make_grey(button);
        }
    };

    //when an answer is clicked by user
    button.onclick = function () {
        //Check the question hasn't been answered yet
        if (answered === false) {
            answered = true;
            reset_right_wrong();
            //Make the answer clicked red
            make_red(button);
            //Check if the answer is right
            if (button_id === real_answer) {
                right_image.style.opacity = "1";
                Score += 1;
            } else {
                wrong_image.style.opacity = "1";
                make_green(real_answer);
            }
            monitor_information.style.top = "30%";
            icon_question.style.width = "50%";
            icon_question.style.left = "25%";
            next_button.style.opacity = "1";
            Nb_questions += 1;
        }
    };

    //When quiz is finished (10 questions have been asked)
    if (Nb_questions === 10) {
        next_button.style.opacity = "0";
        result_button.style.opacity = "1";
        result_button.style.zIndex = "1";
        //Show the result box when button is clicked
        result_button.onclick = function () {
            possible_locations.forEach(function (element) {
                document.getElementById("image_" + element).style.opacity = "0";
                document.getElementById("text_" + element).style.opacity = "0";
            });
            //Display all the elements on the result box
            const result_box = document.getElementsByClassName("results");
            let array_result_box = Array.from(result_box);
            array_result_box.forEach(function (element) {
                element.style.opacity = "1";
                element.style.zIndex = "1";
            });

            //Build the message to send to the server with
            //the level played and the score obtained
            let message_to_send = {"message": [current_level, Score]};
            Ajax.query(message_to_send).then(function (response) {
                //Get and display the previous results from the server
                let easy_score = response.quiz_score[0];
                let medium_score = response.quiz_score[1];
                let hard_score = response.quiz_score[2];
                HTML_easy_score.innerHTML = easy_score + "/10";
                HTML_medium_score.innerHTML = medium_score + "/10";
                HTML_hard_score.innerHTML = hard_score + "/10";

                //Check if the score obtained is better than previously
                //Adapt message accordingly and display
                if (response.quiz_score[3]) {
                    motiv_message = "You have improved!";
                } else {
                    motiv_message = "Better luck next time!";
                }
                motivation_message.innerHTML = motiv_message;
            });

            //Display Score obtained
            document.getElementById("current_score").innerHTML = display_score;
            HTML_current_level.innerHTML = current_level;

            //Restart Quiz
            document.getElementById("restart_button").onclick = function () {
                //Hide the result box
                array_result_box.forEach(function (element) {
                    element.style.opacity = "0";
                    element.style.zIndex = "-1";
                });
                //Reset variables and display
                Score = 0;
                Nb_questions = 0;
                result_button.style.opacity = "0";
                start_button.style.opacity = "1";
                monitor_information.style.opacity = "1";
                reset_right_wrong();
                set_initial_message();
                icon_question.style.opacity = "0";
                easy_level_button.style.opacity = 1;
                medium_level_button.style.opacity = 1;
                hard_level_button.style.opacity = 1;
                result_button.style.zIndex = "-1";
            };
        };
    }
};

