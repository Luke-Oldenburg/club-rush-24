import "dotenv/config";
import Express from "express";

const express = new Express();

// Define Express route for GET requests with a UPC code in the path
express.get("/", async (req, res) => {});

// Start Express server
express.listen(process.env["PORT"], () => {
  console.log(
    `Club Rush '24 API is now listening on port ${process.env["PORT"]}`
  );
});
