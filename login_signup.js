let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container');
let span1 = document.querySelector('#s1');
let span2 = document.querySelector('#s2');

let users = [];

login.onclick = function(){
    container.classList.add('signinForm');
}
    
create.onclick = function(){
    container.classList.remove('signinForm');
}

function add() {
    let name = document.getElementById('in1').value;
    let password = document.getElementById('in2').value;

    if (password.length !== 8) {
        span1.textContent = "Password must contain 8 characters";
        return;
    }

    let user = { name, password };
    users.push(user);
    console.log("User added:", user);
    console.log("User list:", users);
}

function login() {
    let username = document.getElementById('in3').value;
    let password = document.getElementById('in4').value;

    if (!username) {
        span2.textContent = "Name must be filled out";
        return false;
    }

    if (!password) {
        span2.textContent = "Password must be filled out";
        return false;
    }

    let found = false;
    for (let user of users) {
        if (user.name === username && user.password === password) {
            found = true;
            break;
        }
    }

    if (!found) {
        span2.textContent = "Password and username do not match";
        return false;
    }

    return true; // Proceed with form submission
}

function showPass() {
    let passwordInput = document.getElementById('in4');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
