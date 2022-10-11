const Shortcut = Object.create(null);

//Data source for the shortcut page
Shortcut.data = {
    copy: [
        "ctrl",
        "letterC",
        "Select what you want, copy it, " +
        "and it will be temporarily kept in memory by your computer."
    ],
    cut: [
        "ctrl",
        "letterX",
        "Select what you want, copy it, and it will be temporarily kept " +
        "in memory by your computer and deleted from it's previous position."
    ],
    paste: [
        "ctrl",
        "letterV",
        "Click where you want it to go and paste the element that has " +
        "been temporarily kept in memory by your computer previously."
    ],
    save: [
        "ctrl",
        "letterS",
        "Select what you want and save it permenatly in your computer."
    ],
    select: [
        "ctrl",
        "letterA",
        "Used to select all the elements on the document."
    ],
    undo: [
        "ctrl",
        "letterZ",
        "Used to undo the previous action."
    ],
    redo: [
        "ctrl",
        "letterY",
        "Used to redo the previous action. Doesn't work everytime."
    ],
    print: [
        "ctrl",
        "letterP",
        "Used to open the window which allows you to print your document."
    ],
    restore: [
        "window",
        "arrowdown",
        "Used to restore down the window you are on."
    ],
    maximise: [
        "window",
        "arrowup",
        "Used to maximize the window you are on."
    ],
    minimise: [
        "window",
        "letterD",
        "Used to minimize all the opened windows."
    ]
};


//Retrieve the correct data for the button clicked.
Shortcut.find = function (string) {
    return Shortcut.data[string];
};

//Export the answer
export default Object.freeze(Shortcut);
