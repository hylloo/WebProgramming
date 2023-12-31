if(document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
      console.log("Document is ready after waiting!");
      initializeCode();
  })
}
function enmptyTableContent(){

}
function initializeCode() {
  const nameInput = document.getElementById("input-username");
  const emailInput = document.getElementById("input-email");
  const adminStatusInput = document.getElementById("input-admin");
  const imageFileInput = document.getElementById("input-image");
  const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  const addUserButton = document.getElementById("submit-data");
  const clearTableButton = document.getElementById("clearTableButton");

  addInitialUser("User 1", "user1@example.com", false);
  addInitialUser("User 2", "user2@example.com", true);


  addUserButton.addEventListener("click", function() {
      const name = nameInput.value;
      const email = emailInput.value;
      const adminStatus = adminStatusInput.checked;
      const imageFile = imageFileInput.files[0];

      if (name.trim() === "" || email.trim() === "") {
          alert("Please enter name and email");
          return;
      }

      let existingRow = null;
      for ( const row of table.rows){
        if (row.cells[0].textContent === name){
          existingRow = row;
          break;
        }
      }

      if (existingRow){
        existingRow.cells[1].textContent = email;
        existingRow.cells[2].textContent = adminStatus ? "X": "-";
        displayImage(existingRow.cells[3], imageFile);
      }
      else{
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        displayImage(cell4, imageFile);

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = adminStatus ? "X" : "-";
        cell4.innerHTML = `<img src="${imageUrl}" alt="User Image" style="max-width: 64px; max-height: 64px;">`;

        nameInput.value = "";
        emailInput.value = "";
        adminStatusInput.checked = false;
        imageInput.value = "";
      }
      
  });
  clearTableButton.addEventListener("click", function() {
    while (table.firstChild) {
      table.removeChild(table.firstChild);
  }
});

function addInitialUser(name, email, adminStatus, imageFileName) {
  const existingRow = table.insertRow(table.rows.length);
  const cell1 = existingRow.insertCell(0);
  const cell2 = existingRow.insertCell(1);
  const cell3 = existingRow.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = adminStatus ? "X" : "-";
}


function displayImage(cell, imageFile) {
  const image = document.createElement("img");
  image.style.maxWidth = "64px";
  image.style.maxHeight = "64px";
  image.src = URL.createObjectURL(imageFile);

  cell.innerHTML = "";
  cell.appendChild(image);
}

}

