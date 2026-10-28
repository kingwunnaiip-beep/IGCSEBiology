# Biology quiz — 65 questions, with downloaded JPG/PNG images

Open `index.html` in your browser. Keep `index.html`, `styles.css`, `script.js` and the `images/` folder together. No installation or build tools are required.

- `index.html`: page structure.
- `styles.css`: layout, typography, colours, animations and responsive styles.
- `script.js`: all 65 questions, answers, explanations, past-paper tags and quiz controls.
- `images/`: downloaded JPG/PNG photographs and published illustrations covering every answer explanation.
- `IMAGE-CREDITS.md`: image sources, authors and licences.

## Explanation images

Every one of the 65 answer explanations contains a relevant downloaded JPG/PNG image, descriptive alternative text, a caption and source credits. The images display without an internet connection. Existing interactive graphs and teaching models are preserved alongside them. Original source/licence links open online when clicked.

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

In `script.js`, find `const questions = [`. Each question stores its title, choices, correct answer, explanation and past-paper tags. Question 60 is the X-linked recessive inheritance cross: answer C, 25% of all offspring, `0610/22/O/N/22`. Its explanation includes a labelled native HTML Punnett square and a downloaded matching inheritance JPG. Question 61 is the enzyme reaction S → T + U: answer C, `0610/21/M/J/26` / May/June 2026, original paper question 8. Four PNG crops preserve the original graph axes and numerical scales; they can scroll locally for readability at small widths or enlarged text. Feedback explains conservation of mass and the fixed product ratio, shows an approximate 8 g mass balance, and includes a downloaded enzyme reaction illustration. Question 62 is ABO blood-group inheritance: answer D, IᴬIᵒ and IᴮIᵒ, `0610/23/O/N/22` / Oct/Nov 2022, original question 32. It includes the original family-diagram PNG, correctly typeset allele notation, a labelled native Punnett square, and a matching downloaded ABO inheritance illustration. Each of A, B, AB and O has a 25% chance for each child; observed numbers in a family need not match those probabilities. Question 63 concerns a drug reducing protein production from 25 to 5 µg per million cells after one day: answer B, statements 1 and 2 only, `0610/21/M/J/26` / May/June 2026, original question 28. Feedback explains the 80% reduction, distinguishes transcription and translation from DNA replication, and includes a proportional bar comparison, a labelled pathway and a downloaded protein-synthesis JPG. Statements 1 and 2 are possible explanations; the experiment does not establish the exact drug target. Question 64 compares amylase rates: answer B, P → S → Q → R, `0610/22/M/J/26` / May/June 2026, original question 8. It includes the original downloaded graph PNG, a rate table and shared-scale comparison bars. Q is an approximate graph reading: about 22 g in 30 s gives about 0.73 g/s, slightly below S at 0.75 g/s. The independent side-panel scrollbar remains in place. The last question, 65, concerns thorax volume and intercostal muscles: answer C, internal contraction R → S and external contraction Q → R, `0610/22/M/J/26` / May/June 2026, original question 19. It includes the original downloaded graph PNG, selectable answer rows and a visual comparison of inspiration and forced expiration. Feedback distinguishes quiet expiration from forced expiration, explains lung pressure relative to atmospheric pressure, and notes that S → T is also inspiration. Question 51 intentionally has a blank past-paper tag.

The quiz keeps its correct/incorrect highlights, 0.8-second cues, generated sound effects, fixed logo, text-size controls and progress navigation.

## Scrolling the side panel

The question navigator has its own scrollbar. Scroll the question numbers with the mouse wheel or touch; keyboard users can focus the list and press Page Down or the arrow keys. The text-size and sound controls remain above the list on normal-height screens. On short screens, the whole panel scrolls to keep every control reachable. Scrolling the panel does not scroll the question, and its position is retained when an answer is checked or a question is selected. All 65 questions and image files are preserved.
