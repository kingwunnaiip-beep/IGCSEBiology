# Biology quiz — 61 questions, with downloaded JPG/PNG images

Open `index.html` in your browser. Keep `index.html`, `styles.css`, `script.js` and the `images/` folder together. No installation or build tools are required.

- `index.html`: page structure.
- `styles.css`: layout, typography, colours, animations and responsive styles.
- `script.js`: all 61 questions, answers, explanations, past-paper tags and quiz controls.
- `images/`: downloaded JPG/PNG photographs and published illustrations covering every answer explanation.
- `IMAGE-CREDITS.md`: image sources, authors and licences.

## Explanation images

Every one of the 61 answer explanations contains a relevant downloaded JPG/PNG image, descriptive alternative text, a caption and source credits. The images display without an internet connection. Existing interactive graphs and teaching models are preserved alongside them. Original source/licence links open online when clicked.

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

In `script.js`, find `const questions = [`. Each question stores its title, choices, correct answer, explanation and past-paper tags. Question 60 is the X-linked recessive inheritance cross: answer C, 25% of all offspring, `0610/22/O/N/22`. Its explanation includes a labelled native HTML Punnett square and a downloaded matching inheritance JPG. The last question, 61, is the enzyme reaction S → T + U: answer C, `0610/21/M/J/26` / May/June 2026, original paper question 8. Four PNG crops preserve the original graph axes and numerical scales; they can scroll locally for readability at small widths or enlarged text. Feedback explains conservation of mass and the fixed product ratio, shows an approximate 8 g mass balance, and includes a downloaded enzyme reaction illustration. Question 51 intentionally has a blank past-paper tag.

The quiz keeps its correct/incorrect highlights, 0.8-second cues, generated sound effects, fixed logo, text-size controls and progress navigation.
