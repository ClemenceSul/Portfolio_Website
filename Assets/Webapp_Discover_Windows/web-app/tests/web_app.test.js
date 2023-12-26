import fc from "fast-check";
import Icons from "../icon_text.js";
import Internet from "../internet_text.js";
import Shortcut from "../shortcut_text.js";
import Desktop from "../desktop_text.js";
import Google from "../google_text.js";
import File from "../file_text.js";
import Icons_Quiz from "../icon_quiz_text.js";

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}

describe("Retrieval", function () {

    it("Icon's database check.", function () {

        const icon_button_id = Object.keys(Icons.data);

        icon_button_id.forEach(function (element) {
            const information = Icons.find(element);

            const data = Icons.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information for the icons' page.`
                );
            }
        });

    });


    it("Internet's database check.", function () {

        const internet_button_id = Object.keys(Internet.data);

        internet_button_id.forEach(function (element) {
            const information = Internet.find(element);
            const data = Internet.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information ` +
                    `for the internet's page.`
                );
            }
        });

    });


    it("Shortcut's database check.", function () {

        const shortcut_button_id = Object.keys(Shortcut.data);

        shortcut_button_id.forEach(function (element) {
            const information = Shortcut.find(element);
            const data = Shortcut.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information ` +
                    `for the shortcut's page.`
                );
            }
        });

    });


    it("Desktop's database check.", function () {

        const desktop_button_id = Object.keys(Desktop.data);

        desktop_button_id.forEach(function (element) {
            const information = Desktop.find(element);
            const data = Desktop.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information ` +
                    `for the shortcut's page.`
                );
            }
        });

    });


    it("Google's database check.", function () {

        const google_button_id = Object.keys(Google.data);

        google_button_id.forEach(function (element) {
            const information = Google.find(element);
            const data = Google.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information ` +
                    `for the shortcut's page.`
                );
            }
        });

    });


    it("File's database check.", function () {

        const file_button_id = Object.keys(File.data);

        file_button_id.forEach(function (element) {
            const information = File.find(element);
            const data = File.data;

            //Find the key of the information retreived previously
            const new_button_id = getKeyByValue(data, information);

            if (new_button_id !== element) {
                throw (
                    `This is not the correct information ` +
                    `for the shortcut's page.`
                );
            }
        });

    });

});


describe("Quiz", function () {

    it("Get different possible answers", function () {
        const first_iteration = Icons_Quiz.random_indexs();
        const second_iteration = Icons_Quiz.random_indexs();
        return first_iteration !== second_iteration;
    });

    it("Store the highest score obtained", function () {

        fc.assert(fc.property(
            fc.integer(),
            function (integer) {
                const all_levels = ["easy", "medium", "hard"];
                all_levels.forEach(function (level) {
                    const initial_score = Icons_Quiz.score;
                    const result = [level, integer];
                    const improved = Icons_Quiz.update_score(result)[3];
                    const updated_score = Icons_Quiz.score;
                    //If the score is higher, it should have been changed,
                    //but not if it is the same of lower.
                    if (integer > initial_score[level]) {
                        return (
                            updated_score !== initial_score &&
                            improved === true
                        );
                    } else {
                        return (
                            updated_score === initial_score &&
                            improved === false
                        );
                    }
                });
            }
        ));

    });


});
