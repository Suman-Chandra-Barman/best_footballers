// selecte five players
function displayName(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  element.disabled = true;

  // create dynamic li and set innerHTML
  const playerNameList = document.getElementById("player-list");
  const li = document.createElement("li");
  li.innerHTML = `
      <span class="font-bold text-zinc-400">${
        playerNameList.children.length + 1
      }</span>.
      <span class="ml-1 text-slate-300">${playerName}</span>
   `;
  // add more than five player name
  function addPlayerName() {
    let length = playerNameList.children.length;
    if (length < 5) {
      playerNameList.appendChild(li);
    } else if (length === 5) {
      alert("Your can not add more than five player!");
    }
  }
  addPlayerName();
}

// calculation total player expenses
document.getElementById("btn-caculate").addEventListener("click", function () {
  const perPlayerAmount = getInputValue("perplayer-field");
  const playerList = document.getElementById("player-list");
  const playerLength = playerList.children.length;
  const playerExpenses = perPlayerAmount * playerLength;

  // select-five and per player field validatation
  if (isNaN(perPlayerAmount) && playerLength === 0) {
    alert("Select five player and  Per player amount is empty!");
  } else if (playerLength === 0) {
    alert("Select five player is empty!");
  } else if (isNaN(perPlayerAmount)) {
    alert("Per player amount is empty!");
  } else {
    setTotalExpeses("player-expenses-field", playerExpenses);
  }
});

// calculation total  expenses
document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const playerExpensesString = document.getElementById(
      "player-expenses-field"
    ).innerText;
    const playerExpenses = parseInt(playerExpensesString);
    const managerAmount = getInputValue("manager-field");
    const coachAmount = getInputValue("coach-field");
    const totalExpenses = playerExpenses + managerAmount + coachAmount;

    // total player expenses, manager amount and coach amount field validation
    if (playerExpenses == 0 && isNaN(managerAmount) && isNaN(coachAmount)) {
      alert("Total palyer expenses and input field is empty!");
    } else if (isNaN(managerAmount) || isNaN(coachAmount)) {
      alert("Input field is empty!");
    } else {
      setTotalExpeses("total-expenses-field", totalExpenses);
    }
  });
