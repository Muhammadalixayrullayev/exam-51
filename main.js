let users = [
    { name: "jaloliddin", login: 'jonka12', parol: 170 },
    { name: "emir", login: 'user12', parol: 170 },
    { name: "salohiddin", login: 'saloh9090', parol: 170 },
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let logininput = document.getElementById('input').value;
    let passwordinput = Number(document.getElementById('passwordinput').value);

    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.login === logininput && user.parol === passwordinput) {
            document.getElementById('answer').innerHTML = `Salom ${user.name}`;
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        document.getElementById('answer').innerHTML = 'Notog\'ri parol yoki login';
    }
});

document.getElementById('add').addEventListener('click', function() {
    let question = prompt('Savol kiriting:');
    if (question) {
        document.getElementById('questions').innerText = `Savolingiz: ${question}`;
    } else {
        document.getElementById('questions').innerText = 'Savol kiritilmadi';
    }
});