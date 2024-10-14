const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the /assets folder statically
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route to render the HTML with the WebP images
app.get('/', (req, res) => {
  const assetsDir = path.join(__dirname, 'assets');
  fs.readdir(assetsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading the assets directory.');
    }

    // Filter only .webp files
    const webpFiles = files.filter(file => file.endsWith('.webp'));

    // Render HTML with the list of images
    let html = `<html><head><title>WebP Gallery</title></head><body>`;
    html += `<h1>WebP Image Gallery</h1>`;
    html += `<div style="display: flex; flex-wrap: wrap; gap: 10px;">`;

    webpFiles.forEach(file => {
      html += `<div><img src="/assets/${file}" style="max-width: 200px;"/><br></div>`;
    });

    html += `</div></body></html>`;
    res.send(html);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

