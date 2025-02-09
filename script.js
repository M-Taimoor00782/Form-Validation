let fullName = document.querySelector(".name-requried");
let phoneNo = document.querySelector(".phone-requried");
let fullEmail = document.querySelector(".email-requried");
let password = document.querySelector(".password-requried");
let message = document.querySelector(".message-required");
let submitMs = document.querySelector(".submit-required");
let popupMs = document.querySelector(".popup-required");


// for name
const nameInput = document.querySelector("#name");
const validateName = () => {
    const showName = nameInput.value.trim();

    if (showName.length === 0) {
        fullName.innerHTML = "Name is required";
        return false;
    }
    else if (!showName.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)){
        fullName.innerHTML = 'Full name is required';
        return false;
    }
    else{
        fullName.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

nameInput.addEventListener("keyup", validateName);

// for Phone

const phoneInput = document.querySelector("#phone");

const validatePhone = () => {
    showPhone = phoneInput.value.trim();
    phoneErr =/^\d*$/;
    if (showPhone.length === 0) {
        phoneNo.innerHTML = "Phone number is required";
    }
    else if (!phoneErr.test(showPhone)){
        phoneNo.innerHTML = "Phone number is must be a digit";
        return false;
    }
    else if (showPhone.length < 10){
        phoneNo.innerHTML = "Number must be at least 10 digits";
        return false;
    }
    else if (showPhone.length > 14){
        phoneNo.innerHTML = "Numberless then 14 digits";
        return false;
    }
    else{
        phoneNo.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }

};

phoneInput.addEventListener("keyup", validatePhone);

// for Email

const emailInput = document.querySelector("#emailbox");

const validateEmail = () => {
    const showEmail = emailInput.value.trim();
    const emailErr = /^[A-Za-z\d]+([._-]?[A-Za-z\d]+)*@[A-Za-z\d]+(\.[A-Za-z]{3})$/;

    if (showEmail.length === 0){
        fullEmail.innerHTML = 'Email is required';
        return false;
    }
    else if (!emailErr.test(showEmail)){
        fullEmail.innerHTML = 'Email is invalid';
        return false;
    }
    else{
        fullEmail.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

emailInput.addEventListener('keyup', validateEmail);

// for password

const passwordInput = document.querySelector("#password");

const validatePassword = () => {
    const showPassword = passwordInput.value.trim();
    let eyeIcon = document.querySelector(".eye-icon i");
   const passwordChr = 8;

    if (showPassword.length === 0) {
        password.innerHTML = 'password is required';
        return false;
    }

    else if (showPassword.length < passwordChr) {
        password.innerHTML = 'password must be at least 8 characters';
        return false;
    }

    else if (showPassword.length === passwordChr){
        password.innerHTML = '';
        return false;
    }

    else{
       eyeIcon.style.visibility = 'visible';
       eyeIcon.addEventListener('click', () => {
           if (passwordInput.type === 'password'){
            passwordInput.type = 'text';
            eyeIcon.classList.toggle('fa-eye-slash');
            eyeIcon.classList.toggle('fa-eye');
           }
           else {
            passwordInput.type = 'password';
            eyeIcon.classList.toggle('fa-eye');
            eyeIcon.classList.toggle('fa-eye-slash');
           }
        });
        return true;
    }
};

passwordInput.addEventListener('keyup', validatePassword);

// for message

const messageInput = document.querySelector('#message');

const validateMessage = () => {
    let showMessage = messageInput.value.trim();
    let left = 30;
    let messageChr = left - showMessage.length;
    if (showMessage.length === 0){
        message.innerHTML = 'Message is empty';
        return false;
    }
    else if (showMessage.length < left){
        message.innerHTML = `${messageChr} characters is remaining!`;
        return false;
    }
    else{
        message.innerHTML = ` <i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

messageInput.addEventListener('keyup', validateMessage);

// for submit button

const buttons = document.querySelector("#btn");
const form = document.querySelector("#myForm");
let icon1 = document.querySelector(".icon-1");
let icon2 = document.querySelector(".icon-2");

buttons.addEventListener('click', () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()){
        submitMs.innerHTML = "Please fixed the error";
        submitMs.style.display = "flex";
        setTimeout( () => {
            submitMs.style.display = "none";
        }, 3000)
        return false;
    } 
    else{
        popupMs.style.top = "70px";
        icon1.style.visibility = "hidden";
        icon2.style.visibility = "visible";
        setTimeout( () => {
            form.submit();
        }, 3000);
        return true;
    }
});


