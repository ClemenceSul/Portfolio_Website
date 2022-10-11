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
        document.getElementById("google_information").innerHTML = Google.data[HTML_button.id][0];
    };
    //Hide the button when the mouse leaves.
    HTML_button.onmouseleave = function () {
        HTML_button.style.opacity = "0";
    };
};


//Data source for the Google page
const Google = Object.create(null);
Google.data = {
    close: [
        "This closes the window completely."
    ],
    tabbar: [
        "Type here what you wish to search or a URL(the website " +
        "adress which starts with www.) to access the website directly."
    ],
    restore: [
        "This makes the window smaller."
    ],
    minimize: [
        "This withdraws the window " +
        "but it will continue to run in the background"
    ],
    more_tabs: [
        "Click here to access an open tab on this window, " +
        "or click directly on the tab in question."
    ],
    menu_google: [
        "Access the window's settings here. " +
        "(zoom in/out, history, downloads, settings...)"
    ],
    favorites: [
        "This will place the open website in your bookmarks. " +
        "You will then be able to access it more easily."
    ],
    back: [
        "Go back to the previous page."
    ],
    forward: [
        "When you have gone back once, you can then return to " +
        "the page you were looking at previously with this forward arrow."
    ],
    refresh: [
        "Reloads the page."
    ],
    home: [
        "Gives you easy access to the page you have set as 'the homepage'." +
        " This can be changed in google's settings"
    ],
    close_tab: [
        "This will close this tab only."
    ],
    new_tab: [
        "This will open a new tab in this window."
    ],
    apps: [
        "Gives access to various google applications " +
        "(google drive, g-mail..)"
    ],
    account: [
        "Click here if you wish to sign in. Google will then remember " +
        "you and personalize google for you. This is not mandatory."
    ],
    search_bar: [
        "Type here what you wish to search."
    ],
    microphone: [
        "When actioning the microphone, you can ask vocally " +
        "google to search for something."
    ],
    menu_apps: [
        "Gives access to various google applications (google drive, g-mail..)" +
        " These tend to be more personalised."
    ],
    favorites_gmail: [
        "Bookmarked tabs appear here and clicking on " +
        "them will open these websites directly."
    ],
    add_shortcut: [
        "Add links to various websites here to be able to access them " +
        "faster by clicking on them once they show up here."
    ]
};







