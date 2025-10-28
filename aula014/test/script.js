function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>' 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}