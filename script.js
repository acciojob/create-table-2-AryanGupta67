function createTable() {
  const rn = parseInt(prompt("Input number of rows"));
  const cn = parseInt(prompt("Input number of columns"));

  if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
    alert("Invalid input. Please enter positive numbers.");
    return;
  }

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // clear any existing content

  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

