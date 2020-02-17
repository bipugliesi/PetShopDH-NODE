let listaDePets = ["Bob","Menino","Tico"]

//função q recebe parametro nome de pet e adiciona na lista de arrays e retorna se deu certo ou não

function adicionaNaArray(nomeDePet){
    if (listadePets.indexOf(nomeDePet) != -1){
        listadePets.push(nomeDePets)
        return "Pet adicionado na array!"
    } 
    
    else {
        return "Falha ao adicionar pet na array"
    }
}

//funciont addPet(nome){
  //  listaDePets.push(nome)
//return "Pet cadastro com sucesso!"
//}

//retornar o nome dos pets e 
// ------- Nome do Pet:
//function string(array){
//           for(i=0;i<array.lenght;i++){
//            if (array.indexOf(i) != -1){
 //               let template = `---------------
  //              Nome de pet:`
   //             let final = template + array[i]
    //            return final
     //           console.log(final)
      //  }
       // else {
        //    return "não funcionou"
       // }
   // }
   
//}

//string(listaDePets)

function listarPets(){
    let conteudo = "";
    listaDePets.forEach(function(petNome){
        //conteudo+= "----------\n nome do pet: + petNome"
 
 conteudo += `
----------------
Nome do Pet: ${petNome} `
   })
   return conteudo
}

module.exports = {listarPets}