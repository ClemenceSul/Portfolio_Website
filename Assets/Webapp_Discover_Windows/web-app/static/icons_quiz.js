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
    let question = response.question_answer[level.question_index];
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
    let other1 = response.other1[level.answer_index];
    let other2 = response.other2[level.answer_index];
    let other3 = response.other3[level.answer_index];
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
    // Ajax.query().then(function (response) {
    let response = Icons_Quiz.output();
    let question = response.question_answer[level.answer_index];
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
            let response2 = Icons_Quiz.update_score([current_level, Score]);
            //Get and display the previous results from the server
            let easy_score = response2[0];
            let medium_score = response2[1];
            let hard_score = response2[2];
            HTML_easy_score.innerHTML = easy_score + "/10";
            HTML_medium_score.innerHTML = medium_score + "/10";
            HTML_hard_score.innerHTML = hard_score + "/10";

            //Check if the score obtained is better than previously
            //Adapt message accordingly and display
            if (response2[3]) {
                motiv_message = "You have improved!";
            } else {
                motiv_message = "Better luck next time!";
            }
            motivation_message.innerHTML = motiv_message;

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





//Data source for the icon quiz page
const Icons_Quiz = Object.create(null);
const icons_quiz = [
    [
        "Battery",
        "./Icons/Battery.png",
        "Show how much battery your computer has left."
    ],
    [
        "Battery charging",
        "./Icons/Battery charge.png",
        "Indicate your computer is charging."
    ],
    [
        "Power",
        "./Icons/Power.png",
        "Turns on or off your computer."
    ],
    [
        "Sound on",
        "./Icons/Sound 1.png",
        "Show how loud the sound is."
    ],
    [
        "Mute",
        "./Icons/Sound 2.png",
        "Indicate the sound is off."
    ],
    [
        "Microphone",
        "./Icons/Microphone.png",
        "Allow you to communicate vocally with your computer."
    ],
    [
        "Wifi",
        "./Icons/Wifi 2.png",
        "Show how strong your wifi connection is."
    ],
    [
        "Wifi Error",
        "./Icons/Wifi 1.png",
        "Indicate your computer has an issue with the wifi."
    ],
    [
        "No Wifi",
        "./Icons/Wifi 3.png",
        "Indicate your computer is not connected to a wifi."
    ],
    [
        "Ethernet",
        "./Icons/Ethernet.png",
        "Indicate your computer is connected to the wifi via a cable."
    ],
    [
        "Airplane Mode",
        "./Icons/Plane.png",
        "Disables all connections with your computer."
    ],
    [
        "Bluetooth",
        "./Icons/Bluetooth.png",
        "Type of communication between computers."
    ],
    [
        "Notification",
        "./Icons/Notification.png",
        "Indicate you have a message."
    ],
    [
        "Edit",
        "./Icons/Edit.png",
        "Enable modifications to be made."
    ],
    [
        "Bin",
        "./Icons/Bin.png",
        "Delete the element."
    ],
    [
        "Download",
        "./Icons/Download.png",
        "Download the file onto your computer."
    ],
    [
        "Upload",
        "./Icons/Upload.png",
        "Bring the file to the location of interest."
    ],
    [
        "Menu",
        "./Icons/Menu1.png",
        "Open more options or actions."
    ],
    [
        "Filter",
        "./Icons/Filter.png",
        "Filter the elements."
    ],
    [
        "Search",
        "./Icons/Search.png",
        "Launch the search for a result."
    ],
    [
        "Refresh",
        "./Icons/Refresh.png",
        "Reload the page."
    ],
    [
        "Undo",
        "./Icons/Undo.png",
        "Undo the last action made."
    ],
    [
        "Finished",
        "./Icons/Finished.png",
        "Indicate the task is finished."
    ],
    [
        "Settings",
        "./Icons/Setting.png",
        "Open the settings for the document."
    ],
    [
        "Save",
        "./Icons/Save.png",
        "Save the work done on the document."
    ],
    [
        "Minimise",
        "./Icons/Minimise.png",
        "Withdraw the window."
    ],
    [
        "Maximise",
        "./Icons/Maximise.png",
        "Make the window full screen."
    ],
    [
        "Restore Down",
        "./Icons/Restore Down.png",
        "Make the window smaller."
    ],
    [
        "Close",
        "./Icons/Close.png",
        "Close the window completely."
    ],
    [
        "Attach",
        "./Icons/Join.png",
        "Join a file in your email."
    ],
    [
        "Cloud",
        "./Icons/Cloud.png",
        "Indicate the file is on the cloud."
    ],
    [
        "Share",
        "./Icons/Share.png",
        "Share the file to someone else."
    ],
    [
        "Send",
        "./Icons/Send.png",
        "Send the file."
    ]
];

//Function: obtain 4 random numbers between 0 and 33
//(corresponds to the amount of elements in the data source)
Icons_Quiz.random_indexs = function () {
    let indexs = [];
    while (indexs.length < 4) {
        let i = Math.floor(Math.random() * 33);
        if (indexs.includes(i) === false) {
            indexs.push(i);
        }
    }
    return indexs;
};

//Function: retreive the 4 lines in the data source who's index
//corresponds to the random numbers
Icons_Quiz.output = function () {
    let indexs = Icons_Quiz.random_indexs();
    //The 1st line will be the question
    let answer = {
        question_answer: icons_quiz[indexs[0]],
        other1: icons_quiz[indexs[1]],
        other2: icons_quiz[indexs[2]],
        other3: icons_quiz[indexs[3]]
    };
    return answer;
};


//GETTING SCORE

//Set the variables needed later
Icons_Quiz.score = {
    easy: 0,
    medium: 0,
    hard: 0
};
let improved;

//Treat the score obtained to display the previous ones and possible improvement
Icons_Quiz.update_score = function (array) {
    //Check if the quiz is finished
    if (array !== undefined) {
        let score_result = [
            Icons_Quiz.score.easy,
            Icons_Quiz.score.medium,
            Icons_Quiz.score.hard
        ];
        let [current_level2, Score2] = array;
        if (Score > Icons_Quiz.score[current_level2]) {
            Icons_Quiz.score[current_level2] = Score2;
            improved = true;
        } else {
            improved = false;
        }
        score_result.push(improved);
        //Return the information as array (1, 2, 3, 4):
        //1 - previous easy score
        //2 - previous medium score
        //3 - previous hard score
        //4 - Has the user improved?
        return score_result;
    }
};