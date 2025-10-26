function contar() {
    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')

    if (n3.value > n2.value) {
        alert('Passo inválido! Considerando PASSO 1')
    } else if (n1.value == '' || n3.value == '') {
        res.innerHTML = 'Preencha todos os campos!'
    } else if (n2.value >= n1.value || n3.value >= n2.value) {
        res.innerHTML = 'Digite um número válido!'
    } else {
        for (var n1 = 1; n1.value < n2.value; n1++) {
            res.innerHTML = `${n1}`
        }
    }
}


    /* var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')


    if (n3.value > n2.value) {
        alert('Passo inválido! Considerando PASSO 1')
    } else if (n1.value == '' || n3.value == '') {
        res.innerHTML = 'Digite um número!'
    } else if (n2.value >= n1.value || n2.value >= n3.value) {
        res.innerHTML = 'Digite um número válido!'
    } else if (for (let n1)) */


/*for (var n = 1; n <= 20; n++) {
    console.log(n);
}*/