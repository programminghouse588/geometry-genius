function calculateParalalArea() {
    const paralalBaseValue = document.getElementById('base-value');
    const paralalBaseInput = paralalBaseValue.value;
    const base = parseFloat(paralalBaseInput);
    console.log(base);

    const paralalHeightValue = document.getElementById('height-value');
    const paralalHeightInput = paralalHeightValue.value;
    const height = parseFloat(paralalHeightInput);
    console.log(height);

    const area = base * height;
    console.log('area of the paralal is:', area);

    const paralalAreaSpan = document.getElementById('paralal-area');
    paralalAreaSpan.innerText = area;
}