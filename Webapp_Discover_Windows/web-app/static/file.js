// Import the Javascript modules to exchange messages with a server.
import Main from "./main.js";

//Set the code for the page. Used for retreiving data from the server.
const code_page = "file";

//Set the initial variables
let file_menu_open = false;
let file_home_menu_open = true;
let file_share_menu_open = false;
let file_view_menu_open = false;
const all_home_buttons_id = [
    "home_pin",
    "home_copy",
    "home_paste",
    "home_cut",
    "home_copypath",
    "home_pasteshortcut",
    "home_moveto",
    "home_copyto",
    "home_delete",
    "home_rename",
    "home_newfolder",
    "home_newitem",
    "home_easyaccess",
    "home_properties",
    "home_open",
    "home_edit",
    "home_history",
    "home_select_all",
    "home_select_all",
    "home_invert"
];
const all_share_buttons_id = [
    "share_share",
    "share_email",
    "share_zip",
    "share_burn",
    "share_print",
    "share_fax",
    "share_specific",
    "share_remove",
    "share_advanced"
];
const all_view_buttons_id = [
    "view_navigation",
    "view-preview",
    "view_details",
    "view_type",
    "view_sort",
    "view_groupe",
    "view_columns",
    "view_size",
    "view_what",
    "view_hide",
    "view_options"
];
let initial_message = (
    "Hover on the different buttons of the virtual screen to find " +
    "out more about the desktop's functionalities."
);

//Retrieve HTML elements needed
const HTML_customize_button = document.getElementById("menu_customize_button");
const HTML_customize_menu = document.getElementById("customize_menu");
const HTML_quick_accessbar = document.getElementById("quick_accessbar");
const HTML_file_button = document.getElementById("menu_file_button");
const HTML_file_menu = document.getElementById("file_menu");
const HTML_home_button = document.getElementById("menu_home_button");
const HTML_home_menu = document.getElementById("home_menu");
const HTML_share_button = document.getElementById("menu_share_button");
const HTML_share_menu = document.getElementById("share_menu");
const HTML_view_button = document.getElementById("menu_view_button");
const HTML_view_menu = document.getElementById("view_menu");

//Initialize the menus' state
HTML_customize_menu.style.opacity = "0";
HTML_file_menu.style.opacity = "0";

//Open the Customize Menu
HTML_customize_button.onclick = function () {
    if (HTML_customize_menu.style.opacity === "0") {
        HTML_customize_menu.style.opacity = "1";
        HTML_quick_accessbar.style.opacity = "1";
        file_menu_open = true;
        initial_message = (
            "Opens the menu to customize the tool bar on the left. " +
            "Click to see and again to close."
        );
    } else {
        HTML_customize_menu.style.opacity = "0";
        HTML_quick_accessbar.style.opacity = "0";
        file_menu_open = false;
        initial_message = (
            "Hover on the different buttons of the virtual screen to find " +
            "out more about the desktop's functionalities."
        );
    }
};

//Open the File Menu
HTML_file_button.onclick = function () {
    if (HTML_file_menu.style.opacity === "0") {
        HTML_file_menu.style.opacity = "1";
        file_menu_open = true;
        initial_message = (
            "Opens the menu to access general options about the " +
            "file explorer window. Click to see and again to close."
        );
    } else {
        HTML_file_menu.style.opacity = "0";
        file_menu_open = false;
        initial_message = (
            "Hover on the different buttons of the virtual screen to find " +
            "out more about the desktop's functionalities."
        );
    }
};


//Open the Home menu
HTML_home_button.onclick = function () {
    HTML_share_menu.style.opacity = 0.0;
    HTML_home_menu.style.opacity = 1.0;
    HTML_view_menu.style.opacity = 0.0;
    file_home_menu_open = true;
    file_share_menu_open = false;
    file_view_menu_open = false;
    all_home_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "1";
    });
    all_share_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
    all_view_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
};


//Open the Share Menu
HTML_share_button.onclick = function () {
    HTML_share_menu.style.opacity = 1.0;
    HTML_home_menu.style.opacity = 0.0;
    HTML_view_menu.style.opacity = 0.0;
    file_home_menu_open = false;
    file_share_menu_open = true;
    file_view_menu_open = false;
    all_home_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
    all_share_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "1";
    });
    all_view_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
};


//Open the View Menu
HTML_view_button.onclick = function () {
    HTML_share_menu.style.opacity = 0.0;
    HTML_home_menu.style.opacity = 0.0;
    HTML_view_menu.style.opacity = 1.0;
    file_home_menu_open = false;
    file_share_menu_open = false;
    file_view_menu_open = true;
    all_home_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
    all_share_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "-1";
    });
    all_view_buttons_id.forEach(function (element) {
        document.getElementById(element).style.zIndex = "1";
    });
};

//Retreive the button id's, receive answer from server and display it
function show_button_information(button_id_location, menu_related_to) {
    let file_home = JSON.parse(
        window.sessionStorage.getItem(button_id_location)
    );

    const HTML_button_home = document.getElementById(file_home);
    HTML_button_home.onmousemove = function () {
        if (file_menu_open === false && menu_related_to === true) {
            HTML_button_home.style.opacity = 1.0;
            //Get and display information from server
            Main.server(HTML_button_home, code_page, "file_information", 0);
        }
    };
    HTML_button_home.onmouseleave = function () {
        if (file_menu_open === false && menu_related_to === true) {
            HTML_button_home.style.opacity = 0.0;
        }
    };
}

//Constant function
document.onmouseover = function () {
    document.getElementById("file_information").innerHTML = initial_message;


    //Code for the direct buttons (not in a menu)
    let file = JSON.parse(window.sessionStorage.getItem("File"));
    const HTML_button = document.getElementById(file);
    HTML_button.onmousemove = function () {
        if (file_menu_open === false) {
            HTML_button.style.opacity = 1.0;
            //Get and display information from server
            Main.server(HTML_button, code_page, "file_information", 0);
        }
    };
    HTML_button.onmouseleave = function () {
        if (file_menu_open === false) {
            HTML_button.style.opacity = 0.0;
        }
    };

    //For the home menu elements
    show_button_information("File_home", file_home_menu_open);

    //For the share menu elements
    show_button_information("File_share", file_share_menu_open);

    //for the view menu elements
    show_button_information("File_view", file_view_menu_open);
};

