const Google = Object.create(null);

//Data source for the Google page
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


//Retrieve the correct data for the button hovered upon.
Google.find = function (string) {
    return Google.data[string];
};

//Export the answer
export default Object.freeze(Google);
