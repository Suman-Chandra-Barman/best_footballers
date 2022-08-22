function displayName(element) {
  // get select five player name
  const playerName = element.parentNode.parentNode.children[0].innerText;

  // after clicked button disable
  element.disabled = true;

  const playerNameList = document.getElementById("player-list");
  const li = document.createElement("li");
  li.innerHTML = `
      <span class="font-bold text-zinc-400">${
        playerNameList.children.length + 1
      }</span>.
      <span class="ml-1 text-slate-300">${playerName}</span>
   `;

  function addNames() {
    let length = playerNameList.children.length;
    if (length < 4) {
      playerNameList.appendChild(li);
    } else if (length === 4) {
      playerNameList.appendChild(li);
      alert("Your can add more than five players!");
    }
  }
  addNames();
}
document.getElementById("btn-caculate").addEventListener("click", function () {
  const perPlayerAmount = getInputValue("perplayer-field");

  const playerList = document.getElementById("player-list");
  const playerLength = playerList.children.length;
  // total player expenses
  const playerExpenses = perPlayerAmount * playerLength;

  setTotalExpeses("player-expenses-field", playerExpenses);
});

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
    setTotalExpeses("total-expenses-field", totalExpenses);
  });
