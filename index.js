const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin"
});

function selectPet(){
  con.query("SELECT * FROM meupet.pet", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}

function insertTable(pet){
  var sql = `INSERT INTO meupet.pet (id_raca, id_tutor, nome, cor) VALUES (${pet.idraca}, ${pet.idtutor}, '${pet.nome}', '${pet.cor}')`;	
  console.log(sql);
 
  con.query(sql, trataRetorno);
  
}

function trataRetorno(err, result){
  if (err) throw err;
  console.log(result);
}


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
insertTable({
	idraca: 1,
    idtutor: 2,
	nome: 'Nina',
	cor: 'Mel'
});
*/
selectPet();
