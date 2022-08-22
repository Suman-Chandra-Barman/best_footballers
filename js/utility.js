function getInputValue(id) {
  const element = document.getElementById(id);
  const stringAmount = element.value;
  const amount = parseInt(stringAmount);
  return amount;
}

function setTotalExpeses(id, amount) {
  const element = document.getElementById(id);
  element.innerText = amount;
}
