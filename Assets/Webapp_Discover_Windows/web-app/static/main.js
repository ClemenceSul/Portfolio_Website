import Ajax from "./ajax.js";
const Main = Object.create(null);

//Create function to find the response from the server
Main.server = function (button, page, where, index) {
    //Build the message (the button's id) to send to the server.
    let object_to_send = {"message": button.id};
    // Send the object and retrieve the response.
    Ajax.query(object_to_send).then(function (response) {
        //Display the reponse in the correct location
        document.getElementById(where).innerHTML = response[page][index];
    });
};

export default Object.freeze(Main);