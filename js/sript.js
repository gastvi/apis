let inputCpf = document.getElementById("cpf");
let inputSenha = document.getElementById("senhaUsuario")
let inputConfimarSenha = document.getElementById("confirmarSenhaUsuario");
let inputCep = document.getElementById("cepUsuario");
let inputCartão = document.getElementById("cartãoUsuario")
let inputCVV = document.getElementById("cvvUsuario");
let inputCpfTitular = document.getElementById("titularCpfUsuario")

let inputEndereco = document.getElementById("enderecoUsuario");
let inputBairro = document.getElementById("bairroUsuario");
let inputCidade = document.getElementById("cidadeUsuario");
let selectEstado = document.getElementById("estadoUsuario")



//validação cpf
inputCpf.addEventListener("keyup", (event) => {

    if (isNaN(inputCpf.value)) {

        inputCpf.value = inputCpf.value.substring(0, (inputCpf.value.length - 1))
    }
    if (inputCpf.value.length >= 11) {
        inputCpf.value = inputCpf.value.substring(0, 11)
    }

})

//validação cep

function busarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => Response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCep.setAttribute("class", "form-control is-invalid")
        }
         inputCep.setAttribute("class","form-control is-valid")
         inputEndereco.value = dados.logradouro
         inputBairro.value = dados.bairro
         inputCidade.value = dados.localidade
         selectEstado.value= dados.uf
    })
}


inputCep.addEventListener("keyup", (event) => {

    if (isNaN(inputCep.value)) {

        inputCep.value = inputCep.value.substring(0, (inputCep.value.length - 1))
    }
    if (inputCep.value.length >= 8) {
        inputCep.value = inputCep.value.substring(0, 8)
        busarCep(inputCep.value)
    }

})

//validação numero do cartão
inputCartão.addEventListener("keyup", (event) => {

    if (isNaN(inputCartão.value)) {

        inputCartão.value = inputCartão.value.substring(0, (inputCartão.value.length - 1))
    }
    if (inputCartão.value.length >= 16) {
        inputCartão.value = inputCartão.value.substring(0, 16)
    }

})
//validação do cvv
inputCVV.addEventListener("keyup", (event) => {

    if (isNaN(inputCVV.value)) {

        inputCVV.value = inputCVV.value.substring(0, (inputCVV.value.length - 1))
    }
    if (inputCVV.value.length >= 3) {
        inputCVV.value = inputCVV.value.substring(0, 3)
    }

})

//validação d0 cpf do titular

inputCpfTitular.addEventListener("keyup", (event) => {

    if (isNaN(inputCpfTitular.value)) {

        inputCpfTitular.value = inputCpfTitular.value.substring(0, (inputCpfTitular.value.length - 1))
    }
    if (inputCpfTitular.value.length >= 11) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0, 11)
    }

})

//validação da senha

inputConfimarSenha.addEventListener("keyup", (event) =>{

    if(inputConfimarSenha.value == inputSenha.value){
    inputConfimarSenha.setAttribute("class", "form-control is-valid")
    inputSenha.setAttribute("class", "form-control is-valid")

    }else{
        inputConfimarSenha.setAttribute("class", "form-control is-invalid")
        inputSenha.setAttribute("class", "form-control is-invalid")
    }

})

inputSenha.addEventListener("keyup", (event) =>{

    if(inputSenha.value == inputConfimarSenha.value){
    inputConfimarSenha.setAttribute("class", "form-control is-valid")
    inputSenha.setAttribute("class", "form-control is-valid")

    }else{
        inputConfimarSenha.setAttribute("class", "form-control is-invalid")
        inputSenha.setAttribute("class", "form-control is-invalid")
    }

})

//finalizando a compra



