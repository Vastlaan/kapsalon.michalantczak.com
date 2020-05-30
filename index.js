const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");

const app = express();

app.use(bodyParser.json());

app.get("/api/appointments", db.getAppointments);

app.post("/api/create_appointment", db.createAppointment);

app.post("/api/loginClient", db.loginClient);

app.get("/api/getPrices", db.getPrices);

app.post("/api/updatePrices", db.verifyToken, db.updatePrices);

app.post("/api/deletePhoto", db.verifyToken, db.deletePhoto);

app.get("/api/getPhotos", db.getPhotos);

app.post(
    "/api/uploadPhoto",
    db.verifyToken,
    db.useMulterUpload(),
    db.uploadPhoto
);

//app.post("/api/createClient", db.createClient);

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
