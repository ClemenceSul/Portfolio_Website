const Icons_Quiz = Object.create(null);

//GETTING QUESTION AND ANSWER

//Data source for the icon quiz page
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
        let [current_level, Score] = array;
        if (Score > Icons_Quiz.score[current_level]) {
            Icons_Quiz.score[current_level] = Score;
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

//Export the answer
export default Object.freeze(Icons_Quiz);