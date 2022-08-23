function getInputValue(id) {
  const element = document.getElementById(id);
  const stringValue = element.value;
  const amount = parseInt(stringValue);
  return amount;
}

function setTotalExpeses(id, amount) {
  const element = document.getElementById(id);
  element.innerText = amount;
}
