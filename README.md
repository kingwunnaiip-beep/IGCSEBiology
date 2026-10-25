# Biology quiz — 58 questions

Open `index.html` in your browser. Keep the files in this folder together. No build tools or installation are required.

- `index.html`: page structure and links to the stylesheet and JavaScript.
- `styles.css`: layout, colours, typography, animations and responsive styles.
- `script.js`: all 58 questions, answers, explanations, past-paper tags, graphs and quiz controls.

The split preserves the existing quiz content, image references, 0.8-second answer cues and generated sound effects. Native JavaScript is used so the page can also be opened directly from a local folder.

## Your existing images

Copy your logo and question photos from your current source folder into this folder, beside `index.html`. Their original filenames are preserved. These image files were not available in the editing workspace, so they are not included in this package:

- `cricket.jpg`
- `dr-king-wunna-logo.png`
- `dunnock.jpg`
- `earthworm.jpg`
- `myriapod.jpg`
- `onion-plasmolysis.jpg`
- `plant-cells.jpg`
- `prunella-vulgaris.jpg`
- `question-11.png`
- `question-15.png`
- `question-17.png`
- `question-18.png`
- `question-19.png`
- `question-20.png`
- `question-21.png`
- `question-23.png`
- `question-24.png`
- `question-26.png`
- `question-27.png`
- `question-28.png`
- `question-40.png`
- `question-5.png`
- `root-hairs.jpg`
- `vespula-vulgaris.jpg`

Existing online explanation images keep their original URLs and use an internet connection. The diagrams drawn with SVG and the sound effects are included in the code.

## Editing questions

In `script.js`, find `const questions = [`. Each question stores its title, options, correct answer, explanation, and optional `paperCode` and `paperSession`. Keep the array syntax intact when editing.

The last question is the adrenaline graph question: answer C, tagged `0610/22/M/J/25`. Question 51 intentionally has a blank past-paper tag.
