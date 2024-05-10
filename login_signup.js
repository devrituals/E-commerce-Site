var users = [{ username:'ali el', password:'ali123456' }, { username:'amine ze', password:'12345678' }];


function add() {
    var username = document.getElementById('in1').value.trim();
    var password = document.getElementById('in2').value.trim();

    
    if (password.length !== 8) {
        document.getElementById('s1').innerText = 'Password must contain 8 characters';
        return;
    }

    
    var newUser = { username: username, password: password };
    users.push(newUser);

    
    console.log('User list:', users);
}


function show() {
    var table = document.getElementById('table1');

    
    table.innerHTML = '<tr><th>Nom Complet</th><th>Password</th></tr>';

    
    users.forEach(function(user) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = user.username;
        cell2.textContent = user.password;
    });
}


function showPass() {
    var passwordInput = document.getElementById('in4');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}


function login() {
    var username = document.getElementById('in3').value.trim();
    var password = document.getElementById('in4').value.trim();
    var errorSpan = document.getElementById('s2');

    
    if (username === '') {
        errorSpan.innerText = 'Name must be filled out';
        return false;
    }

    
    if (password === '') {
        errorSpan.innerText = 'Password must be filled out';
        return false;
    }

    
    var match = users.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (!match) {
        errorSpan.innerText = 'Password and username do not match';
        return false;
    }

    
    return true;
}
