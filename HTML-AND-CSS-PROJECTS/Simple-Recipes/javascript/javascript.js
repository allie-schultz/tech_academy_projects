//RECIPE POP UP MODAL SECTION

//sets up button that opens recipe modal
var btns = document.querySelectorAll("input.modal-button");

//defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//gets span element that closes modal
var closeBtn = document.getElementsByClassName("close-btn");

//opens modal when user clicks recipe button
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute
            ("href"));
            modal.style.display = "block";
    }
}

//closes modal after 10 seconds
var closeModal = setTimeout(function() {
    modal.style.display = "none";}, 10000);

//closes modal when user clicks on <span> (x)
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if(modals[index].style) {
                modals[index].style.display = "none";
            }
            
        }
    }
}


//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides default browser refresh on submit
        event.preventDefault();

        //Variables to validate each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //Email patter checks for all symbols need in emal such as @ and .
        //and the text beforem between, and after
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //use this variable to display message if fields filled out
        //or thank you message
        const valMsg = document.getElementById('validateMSG');

        if(!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>'
        } else if (!emailPattern.test(email)) {
            //checks if email is valid
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>'
        } else {
            //if all fields are correctly filled out display thank you message
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };
        
        //displays what user wrote in console
        console.log(JSON.stringify(formData));

    }
)
