let items = [];
// Aysu Dalogullari, CIS3023-PROJECT, APRIL 23 2023
function renderInventoryTable() {
  // Get the inventory list element
  const inventoryList = document.getElementById("inventory-list");

  // Clear any existing rows from the table
  inventoryList.innerHTML = "";

  // Create a new row for each item in the inventory
  items.forEach((item) => {
    const row = document.createElement("tr");

    const itemNumber = document.createElement("td");
    itemNumber.textContent = item.itemNumber;
    row.appendChild(itemNumber);

    const itemName = document.createElement("td");
    itemName.textContent = item.itemName;
    row.appendChild(itemName);

    const itemDescription = document.createElement("td");
    itemDescription.textContent = item.itemDescription;
    row.appendChild(itemDescription);

    const itemQuantity = document.createElement("td");
    itemQuantity.textContent = item.itemQuantity;
    row.appendChild(itemQuantity);

    const itemInventoryStatus = document.createElement("td");
    itemInventoryStatus.textContent = item.itemInventoryStatus;
    row.appendChild(itemInventoryStatus);

    const itemVendor = document.createElement("td");
    itemVendor.textContent = item.itemVendor;
    row.appendChild(itemVendor);

    const minimumOrderQuantity = document.createElement("td");
    minimumOrderQuantity.textContent = item.minimumOrderQuantity;
    row.appendChild(minimumOrderQuantity);

    // Add the row to the inventory list
    inventoryList.appendChild(row);
  });

  // Update the total items count
  const totalItems = document.getElementById("total-items");
  totalItems.textContent = items.length;
}

const adminButton = document.getElementById("adminButton");
const adminPanel = document.getElementById("adminPanel");
const addItemButton = document.getElementById("addItemButton");
const deleteItemButton = document.getElementById("deleteItemButton");

adminButton.addEventListener("click", () => {
  // Prompt for password and verify authorization
  const password = prompt("Enter password:");
  if (password === "admin") {
    // Show admin panel if password is correct
    adminPanel.style.display = "block";
  } else {
    alert("Access denied.");
  }
});
function addItem() {
  var itemNumber = document.getElementById("itemNumber").value;
  var itemName = document.getElementById("itemName").value;
  var itemQuantity = document.getElementById("itemQuantity").value;
  var itemPrice = document.getElementById("itemPrice").value;
  var itemVendor = document.getElementById("itemVendor").value;
  var itemDescription = document.getElementById("itemDescription").value;
  var itemInventoryStatus = document.getElementById("itemInventoryStatus").value;

  // Prepare data object to send to the server
  var data = {
      itemNumber: itemNumber,
      itemName: itemName,
      itemQuantity: itemQuantity,
      itemPrice: itemPrice,
      itemVendor: itemVendor,
      itemDescription: itemDescription,
      itemInventoryStatus: itemInventoryStatus
  };

  // Send AJAX POST request to the servlet
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "addItem", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              // Item added successfully
              alert("Item added successfully!");
              // Optionally, refresh the inventory list
              renderInventoryTable();
          } else {
              // Error adding item
              alert("Error adding item. Please try again later.");
          }
      }
  };
  xhr.send(JSON.stringify(data));
}
function deleteItem() {
  // Retrieve item number to delete
  var itemToDelete = document.getElementById("itemToDelete").value;

  // Send AJAX POST request to the servlet
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "deleteItem", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              // Item deleted successfully
              alert("Item deleted successfully!");
              // Optionally, refresh the inventory list
              renderInventoryTable();
          } else {
              // Error deleting item
              alert("Error deleting item. Please try again later.");
          }
      }
  };
  xhr.send("itemNumberToDelete=" + encodeURIComponent(itemToDelete));
}

/* // Add event listener to the "Add Item" button
addItemButton.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form input fields
  const itemNumber = document.getElementById("itemNumber").value;
  const itemName = document.getElementById("itemName").value;
  const itemQuantity = parseInt(document.getElementById("itemQuantity").value);
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  const itemVendor = document.getElementById("itemVendor").value;
  const itemDescription = document.getElementById("itemDescription").value;
  const itemInventoryStatus = document.getElementById("itemInventoryStatus").value;
  const minimumOrderQuantity = 1;

  // Create a new item object with the form values
  const newItem = {
    itemNumber,
    itemName,
    itemQuantity,
    itemPrice,
    itemVendor,
    itemDescription,
    itemInventoryStatus,
    minimumOrderQuantity
  };

  // Add the new item to the items array
  items.push(newItem);

  // Clear the form input fields
  document.getElementById("itemNumber").value = "";
  document.getElementById("itemName").value = "";
  document.getElementById("itemQuantity").value = "";
  document.getElementById("itemPrice").value = "";
  document.getElementById("itemVendor").value = "";
  document.getElementById("itemDescription").value = "";
  document.getElementById("itemInventoryStatus").value = "";

  // Render the updated inventory table
  renderInventoryTable();
}); */

    /* deleteItemButton.addEventListener("click", () => {
      // Get item to delete
      const itemToDelete = document.getElementById("itemToDelete").value;
    
      // Confirm action
      if (confirm(`Are you sure you want to delete '${itemToDelete}' from inventory?`)) {
        // Find index of item to delete
        const itemIndex = items.findIndex((item) => item.itemName === itemToDelete);
    
        // Remove item from array
        if (itemIndex > -1) {
          items.splice(itemIndex, 1);
        }
    
        // Render the updated inventory table
        renderInventoryTable();
      } */

  
  