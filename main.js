function Verificar() {

        let CEP = document.getElementById('loginCep').value;
    
        let endereço = document.getElementById('loginEndereço').value;
    
        let numero = document.getElementById('loginNúmero').value;
    
        let complemento = document.getElementById('loginComplemento').value;
    
        let bairro = document.getElementById('loginBairro').value;
    
        let cidade = document.getElementById('loginCidade').value;
    
        let estado = document.getElementById('loginEstado').value;
    
        let referencia = document.getElementById('loginpontodereferência').value;
    
        let email = document.getElementById('loginEmail').value;
    
        let password = document.getElementById('loginSenha').value;
    
        let telefone = document.getElementById('loginTelefone').value;
    
        let cpf = document.getElementById('loginCpf').value;
    
        let datanasc = document.getElementById('loginDatadenascimento').value;
    
        let name = document.getElementById('loginName').value;
    
        if (!email || !password || !CEP || !endereço || !numero || !complemento || !bairro || !cidade || !estado || !referencia || !telefone || !cpf || !datanasc || !name)
    
        alert("Campos de preenchimento obrigatório. Favor preencher")
    
    }