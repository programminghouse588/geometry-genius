function calculateRectangleArea() {
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('width-input');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);
    // get rectangle length value
    const rectangleLengthInput = document.getElementById('length-input');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // calculate rectangle area
    const areaOfRectangle = width * length;
    console.log('area of the rectangle is:', areaOfRectangle);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = areaOfRectangle;
}