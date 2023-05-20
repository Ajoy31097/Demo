document.getElementById('addForm').addEventListener('submit', addItem);
document.getElementById('filter').addEventListener('input', filterItems);

function addItem(e) {
  e.preventDefault();

  // Get the values from the input fields
  var itemName = document.getElementById('item').value;
  var itemDescription = document.getElementById('description').value;

  // Create a new <li> element
  var li = document.createElement('li');
  li.className = 'list-group-item';

  // Create a <div> element for item name
  var nameDiv = document.createElement('div');
  nameDiv.className = 'item-name';
  nameDiv.textContent = itemName;

  // Create a <div> element for item description
  var descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'item-description';
  descriptionDiv.textContent = itemDescription;

  // Create a delete button
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append the elements to the <li> element
  li.appendChild(nameDiv);
  li.appendChild(descriptionDiv);
  li.appendChild(deleteBtn);

  // Append the <li> element to the list
  document.getElementById('items').appendChild(li);

  // Clear the input fields
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}

function filterItems(e) {
  var searchText = e.target.value.toLowerCase();
  var items = document.getElementById('items').getElementsByTagName('li');

  Array.from(items).forEach(function (item) {
    var itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

  

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  }
});