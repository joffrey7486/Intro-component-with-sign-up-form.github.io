// define all variable
let form_input = document.getElementById('form_input')
let input = document.getElementsByTagName('input')
let email = document.getElementById('email')

let form_error = document.getElementsByClassName('form_error')
let error = document.getElementsByClassName('error')

// Validation function
function formValidation(event) {
    // Use for loop for all input fields, except submit entry
    for(let i = 0; i < 4; i++){
        //clear the form 
        input[i].classList.remove('error')
        form_error[i].style.display = "none"

        // email validation
        if(!email.validity.valid){
            form_error[2].style.display = 'block'
            email.classList.add('error')
            event.preventDefault()
        }

        // validation to other fields
        if((input.type != 'email' || input.type != 'submit') && input[i].value == ''){
            form_error[i].style.display = 'block'
            input[i].classList.add('error')
            event.preventDefault()
        }
    }
}

// event listerner on the button for call the function
form_input.addEventListener('submit', formValidation, false);
