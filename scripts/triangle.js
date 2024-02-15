function triangleArea() {
    // get triangle base value
  const triangleBaseInput = document.getElementById('base-input');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

//   get triangle height value
    const triangleHeightInput = document.getElementById('height-input');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}