function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')

    if (fano.value.length != 4 || Number(fano.value) > ano || fano.value < 1900) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex   = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var img    = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade > 0 && idade < 14)
                img.setAttribute('src', 'img/foto_crianca_m.png')
            else if (idade < 18)
                img.setAttribute('src', 'img/foto_jovem_m.png')
            else if (idade < 60)
                img.setAttribute('src', 'img/foto_adulto_m.png')
            else
                img.setAttribute('src', 'img/foto_idoso_m.png')
        } else {
            if (idade > 0 && idade < 14)
                img.setAttribute('src', 'img/foto_crianca_f.png')
                else if (idade < 18)
                img.setAttribute('src', 'img/foto_jovem_f.png')
            else if (idade < 60)
                img.setAttribute('src', 'img/foto_adulto_f.png')
            else
                img.setAttribute('src', 'img/foto_idoso_f.png')
        }

        res.style.paddingTop = '50px'
        res.style.textAlign = 'center'
        res.innerHTML = ''
        res.appendChild(img)
    }
}