// Import the Javascript modules to exchange messages with a server.
import Main from "./main.js";

//Set the initial message to display in the monitor.
const initial_message = [
    "Icons are pictograms which help you communicate with your computer. " +
    "Hover over them to find out more.",
    "Careful: Your icons might not appear identical or at all times.",
    " "
];
//Set the code for the page. Used for retreiving data from the server.
const code_page = "icons";


//Constant function
document.onmouseover = function () {
    //Display the initial message on the monitor to explain how the page works.
    document.getElementById("type_icon").innerHTML = initial_message[2];
    document.getElementById("location").innerHTML = initial_message[1];
    document.getElementById("Name").innerHTML = initial_message[2];
    document.getElementById("role").innerHTML = initial_message[0];

    //Retrieve the HTML button on which the mouse is via it's id.
    let icon = JSON.parse(window.sessionStorage.getItem("Icon"));
    const HTML_button = document.getElementById(icon);


    //Display information according to the button hovered upon.
    HTML_button.onmousemove = function () {
        //Make the icon hovered upon red.
        HTML_button.style.filter = (
            "invert(63%) sepia(42%) saturate(6865%) " +
            "hue-rotate(329deg) brightness(94%) contrast(93%)"
        );

        //Get and display information from server
        Main.server(HTML_button, code_page, "Name", 0);
        Main.server(HTML_button, code_page, "type_icon", 1);
        Main.server(HTML_button, code_page, "role", 2);
        Main.server(HTML_button, code_page, "location", 3);
    };


    //Make the button grey when mouse leaves the button
    HTML_button.onmouseleave = function () {
        HTML_button.style.filter = (
            "invert(16%) sepia(2%) saturate(980%) " +
            "hue-rotate(314deg) brightness(103%) contrast(86%)"
        );
    };
};
