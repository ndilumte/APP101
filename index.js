const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const form = document.getElementById('form');
const errorelement = document.getElementById('error');
form.addEventListener('submit', e => {
    let messages =[]
    if(email.value ===""  || email.value === null){ 
        messages.push ("email is required")
    }
    if (password=value.length <= 6){
        messages.push("password must be longer than 6 characters")
    }
    if(messages.length > 0) {
    
     e.preventDefault();
    errorelement=innerText = messages-join(',')}

});
