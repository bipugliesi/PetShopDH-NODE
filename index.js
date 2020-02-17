const http = require('http');
const petshopNode = require('./moduloPetshop')
const server = http.createServer(function(req,res){

    if(req.url =="/listapets"){
        let resultado = petshopNode.listarPets();
        return res.end(resultado)
    }
res.setHeader("Content-type","text/html;charset=utf8")

 res.write("Você está dentro do sistema Petshop")
//res.end("Você está dentro do servidor PetShop")
res.end()
})
server.listen(3031, 'localhost',function()
{
    console.log("Servidor iniciou om sucesso!")
}
)
