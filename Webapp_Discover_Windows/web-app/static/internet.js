//Set the initial message to display in the monitor.
const initial_message = (
    "Hover over the different elements of the diagram on the right to " +
    "find out more about how internet works with your computer."
);

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
        document.getElementById("internet_information").innerHTML = Internet.data[HTML_button.id][0];

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

//Data source for the internet page
const Internet = Object.create(null);
Internet.data = {
    connection: [
        "Wi-Fi is the link to connect your computer to the internet. " +
        "It can be a wire (ethernet) or wireless with a Wi-Fi router " +
        "(using wave radiation). The latter is often less stable."
    ],
    internet: [
        "Internet is the network which connects all the computers " +
        "over the world together."
    ],
    browser: [
        "Like a librarian, the browser finds the website with the " +
        "information you are searching for."
    ],
    website: [
        "These are a group of pages, comparable to a book, " +
        "containing various information."
    ],
    cloud: [
        "The cloud is a location on which documents are placed to " +
        "clear space on your computer. However these documents can " +
        "only be accessed when you are connected to the internet."
    ]
};






