// Import the Javascript modules to exchange messages with a server.
import Main from "./main.js";

//Set the initial message to display in the monitor.
const initial_message = (
    "Hover on the different buttons of the virtual screen on the right to " +
    "find out more about google's functionalities."
);
//Set the code for the page. Used for retreiving data from the server.
const code_page = "google";


//Constant function
document.onmouseover = function () {
    //Display the initial message on the monitor to explain how the page works.
    document.getElementById("google_information").innerHTML = initial_message;

    //Retrieve the HTML button on which the mouse is via it's id.
    let google_id = JSON.parse(window.sessionStorage.getItem("Google"));
    const HTML_button = document.getElementById(google_id);


    //Display information according to the button hovered upon.
    HTML_button.onmousemove = function () {
        //Display the button
        HTML_button.style.opacity = "1";
        //Get and display information from server
        Main.server(HTML_button, code_page, "google_information", 0);
    };
    //Hide the button when the mouse leaves.
    HTML_button.onmouseleave = function () {
        HTML_button.style.opacity = "0";
    };
};








