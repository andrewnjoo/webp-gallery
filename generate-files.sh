#!/bin/bash

# Define the directory and output file
ASSETS_DIR="./assets"
OUTPUT_FILE="./assets/files.js"

# Start the JavaScript array in the output file
echo "const webpFiles = [" > "$OUTPUT_FILE"

# Loop through each .webp file and append to the array
for file in "$ASSETS_DIR"/*.webp; do
  filename=$(basename "$file")
  echo "  \"$filename\"," >> "$OUTPUT_FILE"
done

# Close the JavaScript array
echo "];" >> "$OUTPUT_FILE"

echo "files.js has been generated with the list of .webp files."

