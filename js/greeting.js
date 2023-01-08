
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "name";

function handleLoginSubmit(event){
    event.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputValue);      
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(inputValue);
}

function paintGreeting(inputValue){
    greeting.innerText = `Hello ${inputValue}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedItem = localStorage.getItem(USERNAME_KEY);

if(savedItem === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    paintGreeting(savedItem);
}

