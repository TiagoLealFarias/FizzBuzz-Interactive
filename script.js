document.getElementById("entry").addEventListener("input", function() {
    const entry = parseInt(this.value); // Captures the value you entered
    const resultsTable = document.getElementById("results");

    // Clears previous results
    resultsTable.innerHTML = "";

    if (!entry || isNaN(entry)) {
        return; // Exits function if number is invalid
    }

    let result = "";

    // Determines the result based on the number entered
    if (entry % 3 === 0 && entry % 5 === 0) {
        result = "FizzBuzz";
    } else if (entry % 3 === 0) {
        result = "Fizz";
    } else if (entry % 5 === 0) {
        result = "Buzz";
    } else {
        result = entry;
    }

    // Adds the result to the table
    const row = `<tr>
                    <td>${entry}</td>
                    <td>${result}</td>
                 </tr>`;
    resultsTable.innerHTML = row;
});
