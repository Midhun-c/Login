function validateAge() {
    var userInput = prompt("Please enter your age:");
    var age = parseInt(userInput);

    if (isNaN(age)) {
        alert("Please enter a valid age.");
    } else {
        if (age < 18) {
            alert("Sorry, you are underage.");
        } else {
            alert("Welcome!");
        }
    }
}
