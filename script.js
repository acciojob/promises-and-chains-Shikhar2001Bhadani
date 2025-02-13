document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById('name').value.trim();
        let age = parseInt(document.getElementById('age').value.trim()); 

        if (name === "" || isNaN(age)) {
            alert("Please enter valid details.");
            return;
        }

        function myPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        alert(`Welcome, ${name}. You can vote.`);
                        resolve("Resolved");
                    } else {
                        alert(`Oh sorry ${name}. You aren't old enough.`);
                        reject("Rejected");
                    }
                }, 4000);
            });
        }

        myPromise()
            .then(() => {
                console.log("Done");
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    });
});
