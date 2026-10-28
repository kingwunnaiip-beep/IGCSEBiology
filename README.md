# Biology quiz — 68 questions, with downloaded JPG/PNG images

Open `index.html` in your browser. Keep `index.html`, `styles.css`, `script.js` and the `images/` folder together. No installation or build tools are required.

- `index.html`: page structure.
- `styles.css`: layout, typography, colours, animations and responsive styles.
- `script.js`: all 68 questions, answers, explanations, past-paper tags and quiz controls.
- `images/`: downloaded JPG/PNG photographs and published illustrations covering every answer explanation.
- `IMAGE-CREDITS.md`: image sources, authors and licences.

## Explanation images

Every one of the 68 answer explanations contains a relevant downloaded JPG/PNG image, descriptive alternative text, a caption and source credits. The images display without an internet connection. Existing interactive graphs and teaching models are preserved alongside them. Original source/licence links open online when clicked.

## Your question photos and logo

The uploaded exam-question photos and your logo remain separate from the explanation images. Copy these files from your existing source folder beside `index.html` if you use them:

- `dr-king-wunna-logo.png`
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
- `question-59.png`

Question 59 now loads your diagram from `question-59.png`. Save that uploaded image beside `index.html`. To change its filename, search for `src="question-59.png"` in `script.js`.

## Editing questions

In `script.js`, find `const questions = [`. Each question stores its title, choices, correct answer, explanation and past-paper tags. All previous 65 questions are preserved, including the user-upload path for question 59 and the blank past-paper tag for question 51.

The latest questions are all from **0610/22/F/M/26 — Feb/March 2026**:

- **66 — Urea**, original question 21: intended answer B. The explanation preserves the scientific qualification: liver and kidney functions establish changes across each organ, rather than an absolute ranking of all four blood samples. Includes selectable answer rows, organ panels and a downloaded liver illustration.
- **67 — Mitosis**, original question 29: B, 612 minutes. A countable cell-doubling visual shows 1 → 2 → 4 → 8 cells at 0 → 204 → 408 → 612 minutes, with a downloaded mitosis illustration.
- **68 — Cats**, original question 30: C, six certain heterozygotes. The original pedigree PNG has six numbered HTML annotations in feedback, a corresponding explanation list and an Ll × Ll Punnett square. The unannotated original is used in the question; local scrolling keeps the diagram and key readable at larger text sizes. The original downloaded PNG remains unchanged.

The quiz keeps its correct/incorrect highlights, 0.8-second cues, generated sound effects, fixed logo, text-size controls and progress navigation.

## Scrolling the side panel

The question navigator has its own scrollbar. Scroll the question numbers with the mouse wheel or touch; keyboard users can focus the list and press Page Down or the arrow keys. The text-size and sound controls remain above the list on normal-height screens. On short screens, the whole panel scrolls to keep every control reachable. Scrolling the panel does not scroll the question, and its position is retained when an answer is checked or a question is selected. All 68 questions and image files are preserved.
