function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()  // ano com 4 dígitos --> ex. 1997
    var fano = document.getElementById('txtano')  // ano que o usuário digitou
    var res  = document.getElementById('res')

    // Verifica se usuário digitou algum número e se esse número é > que ano atual
    if (fano.value.length < 4 || Number(fano.value) > ano || fano.value < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex   = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value) 
        var genero = ''

        if (fsex[0].checked)
            genero = 'Homem'
        else if (fsex[1].checked)
            genero = 'Mulher'
    }
}