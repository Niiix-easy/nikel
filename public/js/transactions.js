const myModal = new bootstrap.Modal('#transaction-modal');
let logged = sessionStorage.getItem('logged');
const session = localStorage.getItem('session');

let data = {
    transaction: []
};

document.getElementById('button-logout').addEventListener('click',logout);

function logout() {
    sessionStorage.removeItem('logged');
    localStorage.removeItem('session');
    
    window.location.href = 'index.html';
}

//adicionar lançamento
document.getElementById('transaction-form'.addEventListener('subimit', function(e){
    e.preventDefault();
    const value = parseFloat (document.getElementById('value-input').value);
    const description = document.getElementById('description-input').value;
    const date = document.getElementById('date-input').value;
    const type = document.querySelector('input[nome="type-input"] : checked').value;

    data.transaction.unshift({
        value: value, type: type, description: description, date: date
    })

    saveData(data);
    e.target.resert();
    myModal.hide();

    getTransactions();

    alert('Lançamento adicionado com sucesso.')

});

checkLogged ()

function checkLogged(){
    if(session) {
        sessionStorage.setItem('logged', session);
        logged = session;

    }

    if(!logged) {
        window.location.href = 'index.html';
        return;
    }
    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }

    getTransactions();
}
function getTransactions() {
    const transaction = data.transactions;
    let transactionsHtml = ``;
    if(transactions.length) {
        transactions.forEach((item) => {
            let type = 'Entrada';

            if(item.type == '2'){
                type = 'Saida';
            }

            transactionsHtml += `
            <tr>
                <th scope="row">${item.date}</th>
                <td>${item.value.toFixed(2)}</td>
                <td>$(type)</td>
                <td>$(item.description)</td>
          </tr>             
            `            
        })
    }

    document.getElementById('transactions-list').innerHTML = transactionsHtml;

}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}