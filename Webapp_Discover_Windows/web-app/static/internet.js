// Import the Javascript modules to exchange messages with a server.
import Main from "./main.js";

//Set the initial message to display in the monitor.
const initial_message = (
    "Hover over the different elements of the diagram on the right to " +
    "find out more about how internet works with your computer."
);
//Set the code for the page. Used for retreiving data from the server.
const code_page = "internet";


//Constant function
document.onmouseover = function () {
    //Display the initial message on the monitor to explain how the page works.
    document.getElementById("internet_information").innerHTML = initial_message;

    //Retrieve the HTML button on which the mouse is via it's id.
    let internet = JSON.parse(window.sessionStorage.getItem("Internet"));
    const HTML_button = document.getElementById(internet);


    //Display information according to the button hovered upon.
    HTML_button.onmousemove = function () {
        //Get and display information from server
        Main.server(HTML_button, code_page, "internet_information", 0);

        // Make the element hovered upon red.
        if (HTML_button.id === "connection") {
            HTML_button.style.filter = (

                "invert(63%) sepia(42%) saturate(6865%) " +
                "hue-rotate(329deg) brightness(94%) contrast(93%)"
            );
        } else {
            HTML_button.style.boxShadow = "0 0 0 5px rgb(232, 90, 79)";
        }
    };


    //Make the element grey when mouse leaves
    HTML_button.onmouseleave = function () {
        if (HTML_button.id === "connection") {
            HTML_button.style.filter = "none";
        } else {
            HTML_button.style.boxShadow = "none";
        }
    };
};








