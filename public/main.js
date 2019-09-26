const button = document.getElementById('roll');
const rollDisplay = document.getElementById('roll-display');

button.addEventListener('click', getRoll);

async function getRoll() {
  rollDisplay.classList.remove('rotate-scale-down');
  const response = await fetch('./.netlify/functions/roll');
  const json = await response.json();
  rollDisplay.innerText = json.roll;
  rollDisplay.classList.add('reveal', 'rotate-scale-down');
}
