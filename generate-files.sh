#!/bin/bash

# Define directories and output file
ASSETS_DIR="./assets/images/gallery-images"
ROAST_DIR="./assets/images/roast-images"
OUTPUT_FILE="./assets/files.js"

# Start the JavaScript array for gallery images
echo "const webpFiles = [" > "$OUTPUT_FILE"

# Loop through each .webp file in gallery-images and append to the array
for file in "$ASSETS_DIR"/*.webp; do
  filename=$(basename "$file")
  echo "  \"gallery-images/$filename\"," >> "$OUTPUT_FILE"
done

# Close the webpFiles array
echo "];" >> "$OUTPUT_FILE"

# Start the JavaScript array for roast images
echo "" >> "$OUTPUT_FILE"  # Add a blank line for readability
echo "const roastFiles = [" >> "$OUTPUT_FILE"

# Loop through each .webp file in roast-images and append to the array
for file in "$ROAST_DIR"/*.webp; do
  filename=$(basename "$file")
  echo "  \"roast-images/$filename\"," >> "$OUTPUT_FILE"
done

# Close the roastFiles array
echo "];" >> "$OUTPUT_FILE"

echo "files.js has been generated with gallery and roast image files."
