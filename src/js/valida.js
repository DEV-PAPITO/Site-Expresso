const usuarios = [
    {
        login: 'wendell',
        pass: 'wendell'
    },
    {
        login: 'camille',
        pass: 'camille'
    },
    {
        login: 'giulia',
        pass: 'giulia'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar() {

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios) {

        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = 'index.html'
    }else{
        alert('Usuario ou Senha Incorreta')
    }
})


