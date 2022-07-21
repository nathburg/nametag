const nameInput = document.getElementById("name-input");
const nameButton = document.getElementById("name-button");
const middle = document.getElementById("middle");

nameButton.addEventListener('click', () => {
const value = nameInput.value;
middle.textContent = value;
})


const bloodInput = document.getElementById('blood-input');
const bloodButton = document.getElementById('blood-button');
const bloodType = document.getElementById("blood-type");

bloodButton.addEventListener('click', () => {
  const value = bloodInput.value;
  bloodType.textContent = value;
})
