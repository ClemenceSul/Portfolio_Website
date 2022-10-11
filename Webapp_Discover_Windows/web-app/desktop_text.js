const Desktop = Object.create(null);

//Data source for the Destop page
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


//Retrieve the correct data for the button hovered upon.
Desktop.find = function (string) {
    return Desktop.data[string];
};

//Export the answer
export default Object.freeze(Desktop);
