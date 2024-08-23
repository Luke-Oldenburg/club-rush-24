import "dotenv/config";
import Express from "express";

const express = new Express();

express.use(Express.static("frontend"));
express.use(Express.json());

let color = "#ffffff";

// update current page color
express.post("/api/color", async (req, res) => {
  color = req.body.color;
  console.log("updating page color to: " + color);
  res.status(200).send();
});

// get current page color
express.get("/api/color", async (req, res) => {
  res.send({
    color: color,
  });
});

express.listen(process.env["PORT"], () => {
  console.log(
    `Club Rush '24 API is now listening on port ${process.env["PORT"]}`
  );
});
