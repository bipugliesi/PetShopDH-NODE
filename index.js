const http = require('http');

http.createServer(function(req,res){


//if(req.url == "/contato"){
  //  return res.end("Você está na página de contato")
//}
 
res.end("Você está dentro do servidor PetShop")
}).listen(3031, 'localhost',function()
{
    console.log("Servidor iniciou om sucesso!")
}
)
