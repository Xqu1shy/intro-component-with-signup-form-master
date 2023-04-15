const form = document.getElementById('form');
const fName = document.getElementById('first-name');
const lName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    const successful = document.querySelectorAll('.success')
    // to submit the form
    if (successful.length === 4) {
        form.submit();
    } 
})


const setError = (element, message) => {
    const inputContainer = element.parentElement.parentElement.parentElement;
    const errorDisplay = inputContainer.querySelector('.error')

    errorDisplay.innerText = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputContainer = element.parentElement.parentElement.parentElement;
    const errorDisplay = inputContainer.querySelector('.error')

    errorDisplay.innerText = '';
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
}

const validateInputs = () => {
    const fNameValue= fName.value.trim();
    const lNameValue= lName.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();


    if (fNameValue === ''){
        setError(fName, 'First Name is required');
    } else {
        setSuccess(fName);
    }


    if (lNameValue === ''){
        setError(lName, 'Last Name is required');
    } else {
        setSuccess(lName);
    }
 
    
    if (emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
    } else {
        setSuccess(email)
    }
    

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must contain atleast 8 character');
    } else {
        setSuccess(password)
    }
}


const inputContainer = document.querySelector('.input-container')


form.addEventListener('focusin', (e) => {
    if (e.target.parentNode.classList.contains('input-here')) {
        e.target.parentNode.parentNode.classList.add('focus')
    } 
})

form.addEventListener('focusout', (e) => {
    if (e.target.parentNode.classList.contains('input-here')) {
        e.target.parentNode.parentNode.classList.remove('focus')
    } 
})

