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
            document.getElementById("file_information").innerHTML = File.data[HTML_button_home.id][0];
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
            document.getElementById("file_information").innerHTML = File.data[HTML_button.id][0];
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




//Data source for the File Explorer page
const File = Object.create(null);
File.data = {
    menu_file_button: [
        "Opens the menu to access general options about the " +
        "file explorer window. Click to see and again to close."
    ],
    menu_share_button: [
        "Opens the share options on the ribbon below. Click to see."
    ],
    menu_view_button: [
        "Opens the view options on the ribbon below. Click to see."
    ],
    menu_customize_button: [
        "Opens the menu to customize the tool bar on the left. " +
        "Click to see and again to close."
    ],
    menu_home_button: [
        "Opens the basic options on the ribbon below. Click to see."
    ],
    home_pin: [
        "Allows you to create a direct path to the folder you are " +
        "selecting from the quick access list."
    ],
    home_copy: [
        "Allows you to copy the element you are selecting."
    ],
    home_paste: [
        "Allows you to paste in the opened folder the " +
        "element you have previously copied."
    ],
    home_cut: [
        "Allows you to copy the element you are selecting. " +
        "Once copied, this original copy will be deleted."
    ],
    home_copypath: [
        "This copies the path (name of folder it is in) " +
        "which gives access to the selected element."
    ],
    home_pasteshortcut: [
        "Allows you to paste here a link to the element previously copied."
    ],
    home_moveto: [
        "Allows you to move the selected element to another folder."
    ],
    home_copyto: [
        "Allows you to create a copy of the selected element in another folder."
    ],
    home_delete: [
        "This deletes the element you are selecting (in a blue rectangle.)"
    ],
    home_rename: [
        "Allows you to change the selected element's name."
    ],
    home_newfolder: [
        "Allows you to create a new folder in this folder."
    ],
    home_newitem: [
        "Allows you to create another item in this folder"
    ],
    home_easyaccess: [
        "Creates an access to the file from the network for easier access."
    ],
    home_properties: [
        "Opens the selected element's properties."
    ],
    home_open: [
        "Opens the selected element."
    ],
    home_edit: [
        "Opens the required program to modify the selected element."
    ],
    home_history: [
        "Gives you access to your selected element's past. " +
        "This can allow you to restore the original."
    ],
    home_select_all: [
        "Click to select all the elements in the folder."
    ],
    home_select_none: [
        "Click to remove the selection you have made."
    ],
    home_invert: [
        "Click to select only the elements that have not been selected yet."
    ],
    small_view: [
        "Allows a quick change of the element's " +
        "view according to the thumbnails."
    ],
    help_button: [
        "Opens an internet search for help in file explorer."
    ],
    ribbon_button: [
        "Clicking on it opens or closes the ribbon menu underneath."
    ],
    search_back: [
        "Returns to the previously opened folder."
    ],
    search_forward: [
        "Returns to the folder opened before a step back was taken."
    ],
    search_recent: [
        "Opens a list of the recently opened folders."
    ],
    search_up: [
        "Goes to the folder in which the opened folder is located."
    ],
    search_bar: [
        "Click on the name of the folders to access these, " +
        "the arrows to access those in the same folder or type " +
        "directly the name of the folder here."
    ],
    search_recent2: [
        "Opens a list of the recently opened folders' path. " +
        "Clicking on these will open the desired folder."
    ],
    search_refresh: [
        "Reloads the opened folder. Sometimes necessary to see changes " +
        "that have been made to this folder in another window."
    ],
    search_in: [
        "Type here to search an element located in this opened folder."
    ],
    folder_content: [
        "Here you will find all the elements located in the opened folder. " +
        "Those surrounded by a blue rectangle have been selected."
    ],
    folder_list: [
        "Here you will find a list of all the folders in your computer. " +
        "Click the little arrows next to the folder names to see or hide " +
        "the folders located inside these."
    ],
    quick_list: [
        "Here you will find the elements you have pinned to your quick " +
        "access along with the folders which you have visited often recently."
    ],
    share_share: [
        "Allows you to share the selected element with other people. " +
        "May require additional configuration."
    ],
    share_email: [
        "Allows you to send the element by email to someone else."
    ],
    share_zip: [
        "Places the selected elements in a compressed file which " +
        "then makes it easier to send to someone."
    ],
    share_burn: [
        "Only accessible with the additional machine. " +
        "This will burn the element onto the disc."
    ],
    share_print: [
        "Prints the selected element."
    ],
    share_fax: [
        "Sends the element by fax."
    ],
    share_specific: [
        "Allows you to share the file with someone else. " +
        "May require additional configuration."
    ],
    share_remove: [
        "Allows you to remove the shared access to the file of someone."
    ],
    share_advanced: [
        "Opens more advanced settings for sharing a file."
    ],
    view_navigation: [
        "Allows you to modify the navigation pane (list of folders on the left)"
    ],
    view_preview: [
        "Opens a pane on the right with a preview of the selected file."
    ],
    view_details: [
        "Opens a pane on the right with the details of the selected file."
    ],
    view_type: [
        "Allows you to change the view of the elements located in the " +
        "folder according to the thumbnails. The blue one is the selected one."
    ],
    view_sort: [
        "Allows you to sort the files in the folder " +
        "according to different criteria."
    ],
    view_group: [
        "Shows the elements in the folder according to different criteria."
    ],
    view_columns: [
        "When in details view, this allows you to add a column of information."
    ],
    view_size: [
        "When in details view, this allows you to " +
        "scale the columns to a good size."
    ],
    view_what: [
        "Modifies the view of the individual elements in the folder."
    ],
    view_hide: [
        "Hides the selected items. They will not appear anymore " +
        "if the 'Hidden items' checkbox is unchecked."
    ],
    view_options: [
        "Opens the options menu for the selected item."
    ],
    close: [
        "Closes the file explorer window."
    ],
    minimise: [
        "Minimises the file explorer window."
    ],
    maximise: [
        "Maximises/Restores down the file explorer window."
    ]
};

