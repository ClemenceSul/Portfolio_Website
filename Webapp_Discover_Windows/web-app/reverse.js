// import Rot13 from "./rot13.js";
const Reverse = Object.create(null);

// Takes a string and reverses the order of its characters.
Reverse.reverse = function (string) {

    return string.split("").reverse().join("");
};

debugger;

export default Object.freeze(Reverse);
