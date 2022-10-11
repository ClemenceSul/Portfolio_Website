const Icons = Object.create(null);

//Data source for the icons
Icons.data = {
    Battery: [
        "Battery",
        "(information)",
        (
            "Shows how much battery your computer has left. " +
            "The more black there is, the more battery remaining."
        ),
        "Most often found at the bottom right of the screen"
    ],
    Battery_charge: [
        "Battery Charge",
        "(information)",
        "Indicates your battery is currently changing.",
        "Most often found at the bottom right of the screen"
    ],
    Power: [
        "Power",
        "(button)",
        (
            "Turns on or off your computer. " +
            "On some websites it may be to sign in or out."
        ),
        (
            "Most often found on a physical button of " +
            "your computer or in the start menu."
        )
    ],
    Sound_On: [
        "Sound on",
        "(information)",
        (
            "Shows how loud the sound is. " +
            "The more arcs are white, the louder the sound."
        ),
        "Most often found at the bottom right of the screen"
    ],
    Mute: [
        "Mute",
        "(information)",
        "Indicates the sound is off.",
        "Most often found at the bottom right of the screen"
    ],
    Microphone: [
        "Microphone",
        "(information)",
        (
            "To vocally communicate with your computer. " +
            "Indicates your computer is/can listening"
        ),
        "Most often found next to a search bar"
    ],
    Wifi: [
        "Wifi",
        "(information)",
        (
            "Shows how strong the connection to the Wi-Fi is. " +
            "The more arcs are white, the stronger the connection."
        ),
        "Most often found at the bottom right of the screen"
    ],
    Wifi_error: [
        "Wifi Error",
        "(information)",
        "Indicates there is a problem with your Wi-Fi connection.",
        "Most often found at the bottom right of the screen"
    ],
    No_Wifi: [
        "No Wifi",
        "(information)",
        "Indicates your computer is not connected to any Wi-Fi.",
        "Most often found at the bottom right of the screen"
    ],
    Ethernet: [
        "Ethernet",
        "(information)",
        "Indicates your computer is connected to the Wi-Fi via a cable.",
        "Most often found at the bottom right of the screen"
    ],
    Airplane: [
        "Airplane Mode",
        "(information)",
        "This mode disables all connections with your computer when turned on.",
        "Most often found at the bottom right of the screen"
    ],
    Bluetooth: [
        "Bluetooth",
        "(button)",
        (
            "Allows connection with other devices. " +
            "Used to share information between them."
        ),
        "Most often found at the bottom right of the screen"
    ],
    Notification: [
        "Notification",
        "(information)",
        "Indicates you have a message that requires your attention.", " "
    ],
    Edit: [
        "Edit",
        "(button)",
        "Enables modifications to be made on the file when clicked on.", " "
    ],
    Bin: [
        "Bin",
        "(button)",
        "Deletes the file in question.", " "
    ],
    Download: [
        "Download",
        "(button)",
        "Downloads the file onto your computer.", " "
    ],
    Upload: [
        "Upload",
        "(button)",
        "Brings the file onto the location of interest.", " "
    ],
    Menu1: [
        "Menu",
        "(button)",
        "When clicked, it opens more possible options/actions.",
        "Most often found at the top right or left of the windows. "
    ],
    Menu2: [
        "Menu",
        "(button)",
        "When clicked, it opens more possible options/actions.",
        "Most often found at the top right or left of the windows."
    ],
    Filter: [
        "Filter",
        "(button)",
        "When clicked on, this allows you to filter the results obtained.",
        "Most often found next to a search bar"
    ],
    Search: [
        "Search",
        "(button)",
        "Launches the search for a result.",
        "Most often found next to a search bar"
    ],
    Refresh: [
        "Refresh",
        "(button)",
        "Reloads the page.",
        "Most often found next to a search bar"
    ],
    Undo: [
        "Undo",
        "(button)",
        "Undoes the last action made.",
        "Found at the top of a document"
    ],
    Finished: [
        "Finished",
        "(information)",
        "Indicates a task is finished.", " "
    ],
    Settings: [
        "Settings",
        "(button)",
        "Opens the different settings which can be modified.", " "
    ],
    Save: [
        "Save",
        "(button)",
        "Saves the work you have done on the file.",
        "Often found on the top bar of a document"
    ],
    Minimise: [
        "Minimise",
        "(button)",
        "When clicking on it, the window withdraws but continues to run.",
        "Found at the top right of the windows", " "
    ],
    Maximise: [
        "Maximise",
        "(button)",
        "Click on it to make the windows full screen.",
        "Found at the top right of the windows"
    ],
    Restore_Down: [
        "Restore Down",
        "(button)",
        (
            "When clicking on it, the window is made smaller. " +
            "(The change may not be visible at first.)"
        ),
        "Found at the top right of the windows"
    ],
    Close: [
        "Close",
        "(button)",
        "Closes the window completely.",
        "Found at the top right of the window"
    ],
    Attach: [
        "Attach",
        "(button)",
        "Allows you to attach a file to your email.",
        "Found when writing an email"
    ],
    Cloud: [
        "Cloud",
        "(information)",
        (
            "Indicates the file in question is available on the cloud, " +
            "therefore can only be accessed when connected to the internet."
        ),
        " "
    ],
    Share: [
        "Share",
        "(button)",
        "Allows you to send the file in question to someone else.", " "
    ],
    Send: [
        "Send",
        "(button)",
        "Sends the element.", " "
    ]
};


//Retrieve the correct data for the button hovered upon.
Icons.find = function (string) {
    return Icons.data[string];
};

//Export the answer
export default Object.freeze(Icons);
