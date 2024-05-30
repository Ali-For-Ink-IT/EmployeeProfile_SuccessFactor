const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Define the directory where your static files will be served from
const publicDirectoryPath = path.join(__dirname, "template");
// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define a route to serve the HTML file
app.get("/employeeprofile", (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, "index.html"));
});

// Route to handle PDF generation
app.post("/pdf", async (req, res, next) => {
  try {
    console.log("Backend: Generating PDF");

    const { htmlContent } = req.body;

    // Generate PDF buffer from HTML content using Puppeteer
    const pdfBuffer = await generatePDF(htmlContent);

    // Set the appropriate headers for the response
    res.setHeader("Content-Type", "application/pdf");

    // Send the generated PDF buffer as the response
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on port", port);
});
