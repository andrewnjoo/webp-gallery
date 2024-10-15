Here’s a cleaner version of the `README.md`:

### `README.md`

# WebP Image Gallery

This project is a simple **WebP image gallery** hosted on **GitHub Pages**. It dynamically loads `.webp` images from the `assets` directory using **Bootstrap** and **JavaScript**.

## Project Structure

```
.
├── README.md           # Project documentation
├── assets/             # Directory containing .webp images and files.js
│   ├── [webp images]   # Example: 0297e898-xxxx.webp
│   └── files.js        # Auto-generated list of webp files
├── generate-files.sh   # Script to generate files.js
└── index.html          # Main HTML file for the gallery
```

## Usage

### 1. Generate `files.js`

Run the following command to scan the `assets` directory and create the `files.js` file:

```bash
./generate-files.sh
```

### 2. View the Gallery

Open `index.html` in your browser or host the project on **GitHub Pages** to display the gallery.

## Hosting on GitHub Pages

1. Push your project to a **GitHub repository**.
2. Go to **Settings > Pages** and select the branch you want to publish the site from.
3. Your gallery will be available at `https://<username>.github.io/<repository>`.

## Technologies Used

- **Bootstrap** – For styling and responsive layout.
- **JavaScript** – For dynamically loading images.
- **Shell Script** – To generate the `files.js` with the list of image files.
