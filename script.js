let mysql = require('mysql2');

let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Comrader@zv@n2211'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

document.addEventListener('DOMContentLoaded',)