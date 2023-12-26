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


// //Open the Small Menu
HTML_small_button.onclick = function () {
    if (desktop_any_menu_open === false) {
        HTML_small_menu.style.opacity = 1.0;
        HTML_small_button.style.opacity = 1.0;
        button_open = HTML_small_button;
        desktop_any_menu_open = true;
        desktop_small_menu_open = true;
        initial_message = (
            "Opens a small menu with various program settings. " +
            "Click to find out more and again to close."
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
            document.getElementById("desktop_information").innerHTML = Desktop.data[HTML_button.id][0];
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



//Data source for the Destop page
const Desktop = Object.create(null);
Desktop.data = {
    start_button: [
        "Opens the start menu. Click then hover over the " +
        "different elements to find out more. " +
        "Click again to close."
    ],
    small_button: [
        "Opens a small menu with various program settings. " +
        "Click to find out more and again to close."
    ],
    notification_button: [
        "Opens notifications and basic settings. Click then hover over " +
        "the different elements to find out more. " +
        "Click again to close."
    ],
    search_bar: [
        "Type here to search for a certain program on your computer."
    ],
    task_view: [
        "Shows all the open windows on your computer when clicked."
    ],
    programs: [
        "Here you will find all the windows which are opened along " +
        "with those you have pined on this location."
    ],
    icones: [
        "Here you will find various information about your computer. " +
        "See the icons' page for more information."
    ],
    recycle_bin: [
        "Gives access to all the files you have deleted recently."
    ],
    google_chrome: [
        "Pinned program to desktop for quick access. " +
        "These are different for everyone."
    ],
    Itunes: [
        "Pinned program to desktop for quick access. " +
        "These are different for everyone."
    ],
    microsoft: [
        "Pinned program to desktop for quick access. " +
        "These are different for everyone."
    ],
    firefox: [
        "Pinned program to desktop for quick access. " +
        "These are different for everyone."
    ],
    vlc_media: [
        "Pinned program to desktop for quick access. " +
        "These are different for everyone."
    ],
    start_power: [
        "Allows you to put your computer to sleep (quick close), " +
        "shut it down or restart it."
    ],
    start_setting: [
        "Gives access to all the computer's settings."
    ],
    start_account: [
        "Allows you to sign out and connect as another user."
    ],
    start_menu: [
        "Reveals the icons along the left side's utility."
    ],
    start_list: [
        "List of all the programs installed on your " +
        "computer by alphabetical order."
    ],
    start_apps: [
        "These are the pinned programs in Start for quick access. " +
        "They are different for everyone."
    ],
    notif_manage: [
        "Opens the notification's settings."
    ],
    notif_notif: [
        "Here will appear all the notifications."
    ],
    notif_collapse: [
        "Click here to make the settings' menu smaller/bigger " +
        "(might be written expand instead)"
    ],
    notif_clear: [
        "Click here to clear all notifications."
    ],
    notif_settings: [
        "Find here some basic settings."
    ],
    notif_light: [
        "Drag the cursor to adjust the screen's brightness."
    ]
};




