const gallery = document.getElementById("gallery");
webpFiles.forEach((file) => {
  const img = document.createElement("img");
  img.src = `./assets/${file}`;
  img.alt = file;
  gallery.appendChild(img);
});
