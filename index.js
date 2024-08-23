import "dotenv/config";
import Express from "express";

const express = new Express();

express.use(Express.static("frontend"));

// update current page color
express.post("/api/color", async (req, res) => {});

// get current page color
express.get("/api/color", async (req, res) => {});

express.listen(process.env["PORT"], () => {
  console.log(
    `Club Rush '24 API is now listening on port ${process.env["PORT"]}`
  );
});
