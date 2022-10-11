const Internet = Object.create(null);

//Data source for the internet page
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


//Retrieve the correct data for the button hovered upon.
Internet.find = function (string) {
    return Internet.data[string];
};

//Export the answer
export default Object.freeze(Internet);
