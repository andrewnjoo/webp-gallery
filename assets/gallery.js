// assets/gallery.js

const gallery = document.getElementById("gallery");
const roastGallery = document.getElementById("roastGallery");

// Function to load gallery images dynamically with lazy loading
function loadGallery(imagesArray, targetElement, basePath) {
  targetElement.innerHTML = ""; // Clear previous content if any
  imagesArray.forEach((file) => {
    const img = document.createElement("img");
    img.src = `${basePath}/${file}`;
    img.alt = file;
    img.classList.add("img-fluid", "p-2");
    img.loading = "lazy"; // Enable lazy loading
    targetElement.appendChild(img);
  });
}

// Load main gallery images on page load
loadGallery(webpFiles, gallery, "./assets/images/");

// Function to load roast images dynamically
function loadRoasts() {
  loadGallery(roastFiles, roastGallery, "./assets/images/");
}

// Toggle gallery visibility on button click
document.getElementById("showRoastsBtn").addEventListener("click", function () {
  if (gallery.style.display !== "none") {
    // Hide main gallery and show roast gallery
    gallery.style.display = "none";
    roastGallery.style.display = "block";
    loadRoasts();
    this.textContent = "Show Gallery";
  } else {
    // Hide roast gallery and show main gallery
    roastGallery.style.display = "none";
    gallery.style.display = "block";
    this.textContent = "Show Roasts";
  }
});
