# Question display rules

Start future additions from `quiz-754-illustrated-explanations/` or its successor.

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

## Teaching diagram review

- Match the diagram to the actual question and all distinctions needed to select the answer, including lettered labels and original event numbers.
- Use arrows only for a real flow, causal relationship, or clearly labelled reasoning sequence. Show independent structures, controls, requirements and alternatives as comparisons or branches.
- Separate an energy supply from the material it drives; never imply solutes become energy or that an unchanged enzyme becomes a product.
- Check source graphs at full resolution before describing a plateau, rise, decline, direction or scale. Keep calculations, units and conditional probabilities explicit.
- Check scientific labels and the accessible title/description; render the SVG and check text against both the canvas and panels, including overlaps.
- Keep reviewed diagrams readable on narrow screens through local scrolling; support the text-size control and retain the full-size link. Check correct and incorrect feedback and both Next controls.
- Document source-based corrections to prose. Preserve published keys and source identities unless a separate verified correction requires a change.

## Required illustrated explanation style

Follow Q453’s illustrated approach: draw the scientific subject itself, using SVG geometry for cells, structures, chromosomes, molecules, experimental arrangements, graphs, measured lengths or genetic crosses. A few words in three large cards do not satisfy this requirement. Labels and arrows must point to the corresponding structures and represent the correct relationships.

For the recent 200 questions, every explanation has both an authored illustrated SVG and a credited online supporting image. Preserve that pairing in future additions. Existing relevant online assets may be reused with an appropriate caption; avoid unrelated filler. Include source, author, licence and full-size links. Clarify when the image is a supporting example rather than the question’s specimen, measured data or genetic cross. Keep downloaded images unchanged and retain scale bars/labels.

Use the actual question key in any displayed answer footer, separately from anatomical labels and names such as Graph A or Pyramid A. Check plots against marked points and axes, and check source/figure labels at full resolution. Render and inspect the actual illustration; a title and a successful SVG load alone do not establish that it teaches the requested concept.
