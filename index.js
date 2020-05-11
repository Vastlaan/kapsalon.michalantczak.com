const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");

const app = express();

app.use(bodyParser.json());

app.get("/api/appointments", db.getAppointments);

app.post("/api/create_appointment", db.createAppointment);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 4450;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
