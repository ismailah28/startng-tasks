const name = document.querySelector('#name');
const title = document.querySelector('#title');
const email = document.querySelector('#email');
const meassage = document.querySelector('#message');
const contactForm = document.querySelector('form');

const submitButton = document.querySelector('input[type=submit]');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validateTitle(title);
    validateMessage(message)
    
    if(validateName(name) && validateEmail(email) && validateTitle(title) && validateMessage(message)) {
        window.alert("Form Submitted");
        contactForm.reset();
    }
})

const flagIfInvalid = (field, isValid, errorMessage="error") => {
    let errorNode = field.previousElementSibling.lastChild
    if (isValid) {
        field.classList.remove('error');
        errorNode.style.display = "none";
    }
    else {
        field.classList.add('error');
        errorNode.innerHTML = errorMessage;
        errorNode.style.display = "inline";
    }
}

const validateName = (field) => {
    let errorMessage = "Error! - must contain only alphabets atleast 4 character long ";
    const regex = /^[A-z ]{4,}$/;
    let isValid = regex.test(field.value);
    flagIfInvalid(field, isValid, errorMessage);
    return isValid;
}

const validateEmail = (field) => {
    let errorMessage = "Error! - Invalid email address";
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = regex.test(field.value);
    flagIfInvalid(field, isValid, errorMessage);
    return isValid;
}

const validateTitle = (field) => {
    let errorMessage = "Error! - must contain only alphabet 2 to 10 character long";
    const regex = /^[a-zA-Z.]{2,10}/;
    let isValid = regex.test(field.value);
    flagIfInvalid(field, isValid, errorMessage);
    return isValid;
}

const validateMessage = (field) => {
    let errorMessage = "Error! - must be atleast 20 character long"
    let isValid = message.value.length >= 20 ? true : false;
    flagIfInvalid(field, isValid, errorMessage);
    return isValid;
}
