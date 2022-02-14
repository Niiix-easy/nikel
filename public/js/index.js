const myModal = new bootstrap.Modal('#register-modal');
let logged = sessionStorage.getItem('logged');
const session = localStorage.getItem('session');

checkLogged();

//logar no sistema
document.getElementById('login-form').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('passowrd-input').value;
    const checkSession = document.getElementById('session-check').Checked;

    const account = getAccont(email);

    if(!account) {
        alert('Opps! Verifique o usuario ou a senha.');
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert('Opps! Verifique o usuario ou a senha.');
            return;
        }

        saveSession(email, checkSession);

        window.location.href = 'home.html';

    }
});

// criar conta
document.getElementById('create-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email-create-input').value;
    const password = document.getElementById('passowrd-create-input').value;

    if(email.lengt < 50) {
        alert('Preencha o campo com email');
        return;
    }
    if(password.lengt < 4) {
        alert('Preencha a senha com 4 digitos minimo.');
        return;
    }

    saveAccount({
        login:email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert('Conta criada com sucesso.');


});

function checkLogged(){
    if(session) {
        sessionStorage.setItem('logged', session);
        logged = session;

    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = 'home.html';
    }

}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem('session', data);
    }
    sessionStorage.setItem('logged', data);
}

function getAccont(key){
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
        
    }
    return '';
}

