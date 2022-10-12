import express from "express";
import Icons from "./icon_text.js";
import Shortcut from "./shortcut_text.js";
import Internet from "./internet_text.js";
import Google from "./google_text.js";
import Desktop from "./desktop_text.js";
import File from "./file_text.js";
import Icons_Quiz from "./icon_quiz_text.js";

const port = 8080;
const app = express();

app.use("/", express.static("web-app/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    const requestObject = req.body;
    res.json({
        "message": requestObject.message,
        "icons": Icons.find(requestObject.message),
        "shortcut": Shortcut.find(requestObject.message),
        "internet": Internet.find(requestObject.message),
        "google": Google.find(requestObject.message),
        "desktop": Desktop.find(requestObject.message),
        "file": File.find(requestObject.message),
        "icons_quiz": Icons_Quiz.output(),
        "quiz_score": Icons_Quiz.update_score(requestObject.message)
    });
});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
