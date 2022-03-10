const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();
const nlbKey = process.env.NLB_KEY;
const nlb = require("./nlb");
nlb.setApiKey(nlbKey);

// Have Node serve the files for our built React app
// This code allows our React and Node app to be deployed together on the same domain.
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  console.log(`nlbKey = ${nlbKey}`);
  console.log(req.query);
  // res.send("isbn: " + req.query.isbn);
  nlb
    .GetAvailabilityInfo({ ISBN: req.query.isbn })
    .then((nlb_res) => {
      res.send(nlb_res);
      console.log(nlb_res);
    })
    .catch((err) => {
      console.error(err);
      res.send([]);
    });
  // try {
  //   result = nlb.GetAvailabilityInfo({ ISBN: req.query.isbn });
  //   console.log("result");
  //   console.log(result);
  //   res.send(result);
  // } catch (err) {
  //   console.error("err", err);
  // }
  // res.json({ BOOK_ISBN: req.query });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
