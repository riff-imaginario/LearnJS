function calcular() {
    let ini   = document.getElementById('txtinicio')
    let fim   = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res   = document.getElementById('res')
    let i     = Number(ini.value)
    let f     = Number(fim.value)
    let p     = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        res.innerHTML = 'Contando: '

        // Contagem positiva
        if (i < f) {
            for (let c=i; c <= f; c++) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c=i; c >= f; c--) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`  // bandeira de chegada
    }
}