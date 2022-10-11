// Import the Javascript module to exchange messages with a server.
import Main from "./main.js";

//Set the code for the page. Used for retreiving data from the server.
const code_page = "desktop";

//Set the initial variables
let button_open;
let desktop_small_menu_open = false;
let desktop_start_menu_open = false;
let desktop_notification_menu_open = false;
let desktop_any_menu_open = false;
const conflicting_start_buttons = [
    "start_power",
    "start_setting",
    "start_account",
    "start_menu"
];
const conflicting_other_buttons = [
    "recycle_bin",
    "google_chrome",
    "Itunes",
    "microsoft",
    "firefox",
    "vlc_media"
];
let initial_message = (
    "Hover on the different buttons of the virtual screen " +
    "to find out more about the desktop's functionalities."
);

//Retrieve HTML elements needed
const HTML_small_button = document.getElementById("small_button");
const HTML_small_menu = document.getElementById("small_image");
const HTML_start_button = document.getElementById("start_button");
const HTML_start_menu = document.getElementById("start_image");
const HTML_notif_button = document.getElementById("notification_button");
const HTML_notif_menu = document.getElementById("notification_image");


//Open the Small Menu
HTML_small_button.onclick = function () {
    if (desktop_any_menu_open === false) {
        HTML_small_menu.style.opacity = 1.0;
        HTML_small_button.style.opacity = 1.0;
        button_open = HTML_small_button;
        desktop_any_menu_open = true;
        desktop_small_menu_open = true;
        initial_message = (
            "Opens a small menu with various program settings. " +
            "Click to find out more."
        );
    } else if (desktop_small_menu_open === true) {
        HTML_small_menu.style.opacity = 0.0;
        HTML_small_button.style.opacity = 0.0;
        button_open = "none";
        desktop_small_menu_open = false;
        desktop_any_menu_open = false;
        initial_message = (
            "Hover on the different buttons of the virtual screen " +
            "to find out more about the desktop's functionalities."
        );
    }
};

//Open the Start Menu
HTML_start_button.onclick = function () {
    if (desktop_any_menu_open === false) {
        HTML_start_menu.style.opacity = 1.0;
        HTML_start_button.style.opacity = 1.0;
        button_open = HTML_start_button;
        desktop_start_menu_open = true;
        desktop_any_menu_open = true;
        //Place the start buttons in front of the others.
        conflicting_start_buttons.forEach(function (element) {
            document.getElementById(element).style.zIndex = "1";
        });
        conflicting_other_buttons.forEach(function (element) {
            document.getElementById(element).style.zIndex = "-1";
        });
        initial_message = (
            "Opens the start menu. Click then hover over the " +
            "different elements of the menu to find out more."
        );
    } else if (desktop_start_menu_open === true) {
        HTML_start_menu.style.opacity = 0;
        HTML_start_button.style.opacity = 0;
        button_open = "none";
        desktop_start_menu_open = false;
        desktop_any_menu_open = false;
        //Place the start buttons behind the others.
        conflicting_start_buttons.forEach(function (element) {
            document.getElementById(element).style.zIndex = "-1";
        });
        conflicting_other_buttons.forEach(function (element) {
            document.getElementById(element).style.zIndex = "1";
        });
        initial_message = (
            "Hover on the different buttons of the virtual screen " +
            "to find out more about the desktop's functionalities."
        );
    }
};


//Open the Notification Menu
HTML_notif_button.onclick = function () {
    if (desktop_any_menu_open === false) {
        HTML_notif_menu.style.opacity = 1.0;
        HTML_notif_button.style.opacity = 1.0;
        button_open = HTML_notif_button;
        desktop_notification_menu_open = true;
        desktop_any_menu_open = true;
        initial_message = (
            "Opens notifications and basic settings. Click then hover over " +
            "the different elements of the menu to find out more."
        );
    } else if (desktop_notification_menu_open === true) {
        HTML_notif_menu.style.opacity = 0;
        HTML_notif_button.style.opacity = 0;
        button_open = "none";
        desktop_notification_menu_open = false;
        desktop_any_menu_open = false;
        initial_message = (
            "Hover on the different buttons of the virtual screen " +
            "to find out more about the desktop's functionalities."
        );
    }
};

//Retreive the button id's, receive answer from server and display it
function show_button_information(
    button_id_location,
    menu_related_to,
    required_state_menu
) {

    let button_id = JSON.parse(
        window.sessionStorage.getItem(button_id_location)
    );
    const HTML_button = document.getElementById(button_id);
    HTML_button.onmousemove = function () {
        if (menu_related_to === required_state_menu) {
            HTML_button.style.opacity = 1.0;
            //Get and display information from server
            Main.server(HTML_button, code_page, "desktop_information", 0);
        }
    };
    HTML_button.onmouseleave = function () {
        if (menu_related_to === required_state_menu) {
            HTML_button.style.opacity = 0.0;
        }
    };
}


//Constant function
document.onmouseover = function () {
    document.getElementById("desktop_information").innerHTML = initial_message;

    //For basic desktop buttons
    show_button_information("desktop", desktop_any_menu_open, false);

    //For start menu buttons
    show_button_information("start_menu", desktop_start_menu_open, true);

    //For notification menu buttons
    show_button_information("notif_menu", desktop_notification_menu_open, true);

    //Show the menu button when it's opened
    if (
        button_open === HTML_notif_button ||
        button_open === HTML_small_button ||
        button_open === HTML_start_button
    ) {
        button_open.style.opacity = 1;
    }
};







