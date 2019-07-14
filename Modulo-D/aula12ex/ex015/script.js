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
        var img    = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            img.setAttribute('src', '')
            if (idade >= 0 && idade < 10)
                img.setAttribute('src', 'img/foto_crianca_m.png')
            else if (idade < 21)
                img.setAttribute('src', 'img/foto_jovem_m.png')
            else if (idade < 50)
                img.setAttribute('src', 'img/foto_adulto_m.png')
            else
                img.setAttribute('src', 'img/foto_idoso_m.png')
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10)
                img.setAttribute('src', 'img/foto_crianca_f.png')
            else if (idade < 21)
                img.setAttribute('src', 'img/foto_jovem_f.png')
            else if (idade < 50)
                img.setAttribute('src', 'img/foto_adulto_f.png')
            else
                img.setAttribute('src', 'img/foto_idoso_f.png')
        }

        res.style.textAlign = 'center'
        res.innerHTML = ''
        res.appendChild(img)  // adiciona conteúdo abaixo (Child)
    }
}