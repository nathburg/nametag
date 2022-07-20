const nameInput = document.getElementById("name-input");
const updateButton = document.getElementById("update-button");
const middle = document.getElementById("middle");

updateButton.addEventListener('click', () => {
  const value = nameInput.value;
  middle.textContent = value;
})

