# Installation

Go to https://nodejs.org

Download and install the LTS version (recommended)

After installation, verify it with:

`node -v`
`npm -v`

To install dependencies, run `npm install` from project directory.


# Prepare data

Use extract_pdf_text.py to extract text data from PDF (with page breaks) and save this in /public as 'extracted_text.txt'


# Run the app

run `npm start` from project directory.

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Start labelling

1. Enter the code number for the relevant PDF (e.g. '1', or '2')
2. Highlighting some text will bring up the labelling form
3. Click 'save label' after labelling, this will highlight the text that was labelled
4. Labels are stored in CSV. Once you have finished labelleing, hit 'download CSV' for your labels.
5. The HTML save button is to download the text highlighted text to share outside of the app
6. The JSON save button is to save the highlights for the next labeller to see which parts of the text have been labelled using the 'load from JSON' button