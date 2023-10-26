const mysql=require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'LeninMml',
    database:'school_ecom' 
});
module.exports=connection;