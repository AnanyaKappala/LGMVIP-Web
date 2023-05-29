// JavaScript to handle form submission and display data in the table
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var course = document.getElementById('course').value;

    // Create a new table row and cells
    var table = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var dobCell = newRow.insertCell(2);
    var phoneCell = newRow.insertCell(3);
    var addressCell = newRow.insertCell(4);
    var courseCell = newRow.insertCell(5);

    // Set the cell values to the entered data
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    dobCell.innerHTML = dob;
    phoneCell.innerHTML = phone;
    addressCell.innerHTML = address;
    courseCell.innerHTML = course;

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('course').value = '';

    // Scroll to the newly added row
    newRow.scrollIntoView();
});