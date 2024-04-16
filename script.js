//your code here
document.getElementById('add').addEventListener('click', function() {
      const itemName = document.getElementById('item-name-input').value.trim();
      const itemPrice = parseFloat(document.getElementById('item-price-input').value.trim());

      if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid item name and price.');
        return;
      }

      const tableBody = document.getElementById('shopping-list-body');
      const newRow = tableBody.insertRow();
      const itemCell = newRow.insertCell();
      const priceCell = newRow.insertCell();
      itemCell.textContent = itemName;
      priceCell.textContent = itemPrice.toFixed(2);

      // Clear input fields
      document.getElementById('item-name-input').value = '';
      document.getElementById('item-price-input').value = '';

      // Calculate and display grand total
      const totalPriceCells = Array.from(document.querySelectorAll('#shopping-list-body td:last-child'));
      const grandTotal = totalPriceCells.reduce((total, cell) => total + parseFloat(cell.textContent), 0);
      document.getElementById('total').textContent = grandTotal.toFixed(2);
    });