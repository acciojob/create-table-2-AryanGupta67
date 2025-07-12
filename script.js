function createTable() {
  // Prompt for number of rows
  const rows = parseInt(prompt("Input number of rows"));
  // Prompt for number of columns
  const cols = parseInt(prompt("Input number of columns"));

  // Validate input
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Invalid input. Please enter positive numbers.");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Generate table rows and columns
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
