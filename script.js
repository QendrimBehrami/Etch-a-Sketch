let sketchPadSize = 16;
let hoverColor = "#ff757f";

function createSketchPad(sketchPadSize) {
  let sketchPadContainer = document.querySelector("#sketchPadContainer");

  // Get size of whole sketchPad
  let sketchPadWidth = sketchPadContainer.clientWidth;
  let sketchPadHeight = sketchPadContainer.clientHeight;

  // Compute size of each sketchPad element
  let sketchPadElementWidth = sketchPadWidth / sketchPadSize;
  let sketchPadElementHeight = sketchPadHeight / sketchPadSize;

  for (let i = 0; i < sketchPadSize; i++) {
    // Add one row element to sketchPad
    let sketchPadRow = document.createElement("div");
    sketchPadRow.classList.add("sketchPadRow");
    sketchPadRow.style.height = sketchPadElementHeight + "px";
    sketchPadContainer.appendChild(sketchPadRow);

    // Create the elements within the row
    for (let j = 0; j < sketchPadSize; j++) {
      let sketchPadElement = document.createElement("div");
      sketchPadElement.classList.add("sketchPadElement");
      sketchPadElement.style.width = sketchPadElementWidth + "px";
      sketchPadElement.style.height = sketchPadElementHeight + "px";

      sketchPadElement.addEventListener("mouseenter", (event) => {
        sketchPadElement.style.backgroundColor = hoverColor;
      });

      sketchPadRow.appendChild(sketchPadElement);
    }
  }
}

createSketchPad(sketchPadSize);
