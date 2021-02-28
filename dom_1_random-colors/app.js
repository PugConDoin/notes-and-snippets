const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
  const newColor = makeRandColor()
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor
})

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

