# Question display rules

Start future additions from `quiz-754-native-display/` or its successor.

- Write the question stem, introductory facts, numbered statements and data tables as HTML text.
- Render answer-comparison tables as native selectable A–D rows with the existing `answer-selection-table`, `data-answer-choice` and `answer-table-choice` controls. Set `hideAnswerOptions: true` so there is only one set of choices.
- Use source images only for genuine figures: diagrams, micrographs, graphs, or graphical answer panels. Crop to the figure, retaining complete labels, axes, keys, borders and arrowheads. Exclude question numbers, surrounding prose and answer tables.
- Rebuild textual flowcharts as native text or native sequence rows. Keep their direction clear.
- Do not display a whole-question screenshot beside the same native stem/options, including in the explanation.
- Keep the verified paper code, original question number, source URL, A–D order and published key unchanged. Check every table cell against the original PDF; do not reconstruct it from paraphrased option text.
- Preserve explanatory steps, all four option reasons and the teaching diagram. An error discovered while transcribing must be documented and corrected against the source.
- Use neutral alt text that describes visual information without supplying the answer. Give graphical answer shapes usable descriptions.
- Verify table-cell clicks, letter-button keyboard activation, selected/correct/incorrect highlighting, filters, scoped restart, both Next buttons and small-screen table scrolling.

Q596 is a documented correction in this release: original row D selects glucose transport in blood plasma **and osmosis**, with ticks ✗ ✓ ✓ ✗. Published key D and source reference are unchanged.
