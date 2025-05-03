// Initialize an array to store the JSON data
var jsonDataArray = [];

// Add event listener to the Submit button
document.getElementById('submitButton').addEventListener('click', submitForm);

function submitForm() {
    // Get form values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;

    // Create JSON object
    var formData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phoneNumber": phoneNumber
    };

    // Append JSON object to the array
    jsonDataArray.push(formData);

    // Clear the form fields
    clearFormFields();

    // Display JSON data on the page (optional, can be removed if not needed)
    // displayJsonData();
    console.log(jsonDataArray)
}

function clearFormFields() {
    // Clear form fields
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
}

const login = document.querySelector('.login')

    login.addEventListener('click', ()=> {
        wrapper.classList.add('active');    
    })
    


    // Assuming you have a function to handle navigation
function navigateToPage(option) {
    // Implement your navigation logic here
    console.log(`Navigating to ${option}`);
    // You can use window.location.href = "your_page_url" to redirect to a new page
}

// Event listener for dropdown options
document.getElementById('option1').addEventListener('click', function () {
    navigateToPage('Option 1');
});

document.getElementById('option2').addEventListener('click', function () {
    navigateToPage('Option 2');
});

document.getElementById('option3').addEventListener('click', function () {
    navigateToPage('Option 3');
});
