
const form = document.getElementById("myForm");
        form.addEventListener("submit", function(event){
            event.preventDefault();
            const email = document.getElementById("id1").value;
            const fname = document.getElementById("id2").value;
            const lname = document.getElementById("id3").value;
            const num = document.getElementById("id4").value;

            console.log("Email: ", email);
            console.log("First Name: ", fname);
            console.log("Last Name: ", lname);
            console.log("Phone Number: ", num);

        })