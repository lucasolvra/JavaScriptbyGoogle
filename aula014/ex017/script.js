function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha01.png'
        document.body.style.background = '#322b0d'
    } else if (hora > 12 && hora < 18) {
        img.src = 'img/tarde01.png'
        document.body.style.background = '#66584f'
    } else {
        img.src = 'img/noite01.png'
        document.body.style.background = '#462b26'
    }
        
}