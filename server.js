global.fetch = require("node-fetch");
const config = require("universal-config");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");
const app = express();

// unsplash Constructor
const unsplash = new Unsplash({
  applicationId: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL")
});

// Route
app.get("/api/photos", async (req, res) => {
  const fetching = await unsplash.photos.listPhotos(req.query.start, req.query.count, "latest");
  const data = await toJson(fetching);
  res.json(data);
});

// catching unregistered route
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Display error
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status = err.status || 500;
    res.json({
        message: err.message,
        error: err
    })
});

// Listening
const PORT = 5000 || process.env.PORT;
app.listen(PORT, err => {
  if (err) return new Error(err);
  console.log(`listening to port : ${PORT}`);
});
