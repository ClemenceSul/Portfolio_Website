//Array with all the active keys ids.
const activekeys = [
    "ctrl",
    "letterC",
    "letterX",
    "letterV",
    "letterS",
    "letterA",
    "letterZ",
    "letterY",
    "letterP",
    "window",
    "arrowdown",
    "arrowup",
    "letterD"
];
//Array with all the button ids.
const buttonsid = [
    "copy",
    "cut",
    "paste",
    "save",
    "select",
    "undo",
    "redo",
    "print",
    "restore",
    "maximise",
    "minimise"
];
//Set the initial message to display in the monitor.
const initial_message = (
    "Shortcuts allow you to act faster and more easily, " +
    "when pressing the correct keys on your keyboard. <br> " +
    "Click on the different ones to find out how to use them."
);

//Retrieve HTML element needed
const HTML_monitor_information = document.getElementById("information");


//Constant function
document.onmouseover = function () {
    //Display the initial message on the monitor to explain how the page works.
    document.getElementById("information").innerHTML = initial_message;

    //Retrieve the HTML button on which the mouse is via it's id.
    let icon = JSON.parse(window.sessionStorage.getItem("Shortcut"));
    const button = document.getElementById(icon);


    //Display information according to the button hovered upon.
    button.onmouseenter = function () {
        //Make the button outlined red
        button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";

        //Make red the two keys needed to trigger the shortcut.
        document.getElementById(Shortcut.data[button.id][0]).style.background = ("rgb(232, 90, 79)");
        document.getElementById(Shortcut.data[button.id][1]).style.background = ("rgb(232, 90, 79)");

        // Extract the information and display this in the text box.
        HTML_monitor_information.innerHTML = Shortcut.data[button.id][2];
    };


    //Reset the keyboard and button display
    button.onmouseleave = function () {
        //Make all the keys grey.
        activekeys.forEach(function (element) {
            document.getElementById(element).style.background = (
                "rgb(56, 55, 54)"
            );
        });
        //Remove the outline
        buttonsid.forEach(function (element) {
            document.getElementById(element).style.boxShadow = "none";
        });
    };
};



//Data source for the shortcut page
const Shortcut = Object.create(null);
Shortcut.data = {
    copy: [
        "ctrl",
        "letterC",
        "Select what you want, copy it, " +
        "and it will be temporarily kept in memory by your computer."
    ],
    cut: [
        "ctrl",
        "letterX",
        "Select what you want, copy it, and it will be temporarily kept " +
        "in memory by your computer and deleted from it's previous position."
    ],
    paste: [
        "ctrl",
        "letterV",
        "Click where you want it to go and paste the element that has " +
        "been temporarily kept in memory by your computer previously."
    ],
    save: [
        "ctrl",
        "letterS",
        "Select what you want and save it permenatly in your computer."
    ],
    select: [
        "ctrl",
        "letterA",
        "Used to select all the elements on the document."
    ],
    undo: [
        "ctrl",
        "letterZ",
        "Used to undo the previous action."
    ],
    redo: [
        "ctrl",
        "letterY",
        "Used to redo the previous action. Doesn't work everytime."
    ],
    print: [
        "ctrl",
        "letterP",
        "Used to open the window which allows you to print your document."
    ],
    restore: [
        "window",
        "arrowdown",
        "Used to restore down the window you are on."
    ],
    maximise: [
        "window",
        "arrowup",
        "Used to maximize the window you are on."
    ],
    minimise: [
        "window",
        "letterD",
        "Used to minimize all the opened windows."
    ]
};








