// "pick a color" button
const pickBtn = document.getElementById("color-button");
//"Mystery Color" button
const nextBtn = document.getElementById("next-button");

//random color function:
function colorValue() {
  const color = Math.floor(Math.random() * 256);
  return color;
}

function colorChange(e) {
  const randomColor = `rgb(${colorValue()},${colorValue()},${colorValue()})`;

  e.target.style.backgroundColor = randomColor;
  // console.log(e);
}

pickBtn.onclick = colorChange;
nextBtn.onwheel = colorChange;
