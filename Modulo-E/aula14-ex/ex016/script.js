function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim    = document.getElementById('txtfim')
    let passo  = document.getElementById('txtpasso')
    let res    = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(let c=i; c <= f; c++) {
                res.innerHTML += ` ${c} \u{1F449}`  // mão apontando
            }
        } else {
            // Contagem regressiva
            for(let c=i; c >= f; c--) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        res.innerHTML += `\u{1F3C1}`  // bandeira de chegada
        }
    }
}