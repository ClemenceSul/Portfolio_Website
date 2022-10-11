// Import the Javascript modules to exchange messages with a server.
import Ajax from "./ajax.js";

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
    HTML_monitor_information.innerHTML = initial_message;

    //Retrieve the HTML button on which the mouse is via it's id.
    let icon = JSON.parse(window.sessionStorage.getItem("Shortcut"));
    const button = document.getElementById(icon);


    //Display information according to the button hovered upon.
    button.onmouseenter = function () {
        //Make the button outlined red
        button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";

        //Build the message (the button's id) to send to the server.
        const object_to_send = {"message": button.id};
        //Send the message and display response via Ajax
        Ajax.query(object_to_send).then(function (response) {
            //Make red the two keys needed to trigger the shortcut.
            document.getElementById(response.shortcut[0]).style.background = (
                "rgb(232, 90, 79)"
            );
            document.getElementById(response.shortcut[1]).style.background = (
                "rgb(232, 90, 79)"
            );
            // Extract the information and display this in the text box.
            HTML_monitor_information.innerHTML = response.shortcut[2];
        });
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








