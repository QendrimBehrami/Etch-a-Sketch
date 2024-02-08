let hoverColor = "#ff757f";
const MAX_DIMENSION = 100;
const MIN_DIMENSION = 1;

function createSketchPad(sketchPadDimension) {
  let sketchPadContainer = document.querySelector("#sketchPadContainer");
  sketchPadContainer.replaceChildren();

  // Get size of whole sketchPad
  let sketchPadWidth = sketchPadContainer.clientWidth;
  let sketchPadHeight = sketchPadContainer.clientHeight;

  // Compute size of each sketchPad element
  let sketchPadElementWidth = sketchPadWidth / sketchPadDimension;
  let sketchPadElementHeight = sketchPadHeight / sketchPadDimension;

  for (let i = 0; i < sketchPadDimension; i++) {
    // Add one row element to sketchPad
    let sketchPadRow = document.createElement("div");
    sketchPadRow.classList.add("sketchPadRow");
    sketchPadRow.style.height = sketchPadElementHeight + "px";
    sketchPadContainer.appendChild(sketchPadRow);

    // Create the elements within the row
    for (let j = 0; j < sketchPadDimension; j++) {
      let sketchPadElement = document.createElement("div");
      sketchPadElement.classList.add("sketchPadElement");
      sketchPadElement.style.width = sketchPadElementWidth + "px";
      sketchPadElement.style.height = sketchPadElementHeight + "px";

      // Setup the hover effect
      sketchPadElement.addEventListener("mouseenter", (event) => {
        sketchPadElement.style.backgroundColor = hoverColor;
      });

      sketchPadRow.appendChild(sketchPadElement);
    }
  }
}

// Enable adaptive dimension
let dimensionInputField = document.querySelector("#dimensionInputField");
dimensionInputField.addEventListener("input", function () {
  let dimension = dimensionInputField.value;
  if (dimension >= MIN_DIMENSION && dimension <= MAX_DIMENSION) {
    createSketchPad(dimensionInputField.value);
  } else {
    alert(
      `Please provide a dimension between ${MIN_DIMENSION} and ${MAX_DIMENSION}`
    );
  }
});

// Initial SketchPad
createSketchPad(dimensionInputField.value);
