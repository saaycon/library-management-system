let mysql = require('mysql2');

let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Comrader@zv@n2211',
    database: 'exercise'
});

con.connect(function(err){
    if(err) throw err;
    con.query('SELECT * FROM members', function (err, result ){
        if(err) throw err;
        console.log(result)
    })
});


