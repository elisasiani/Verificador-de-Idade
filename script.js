function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente') 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ` `
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
               //criança 
               img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança 
                img.setAttribute('src', 'bebemenina.png')
             } else if (idade < 21) {
                 //jovem
                 img.setAttribute('src', 'jovemmulher.png')
             } else if (idade < 50) {
                 //adulto
                 img.setAttribute('src', 'mulheradulta.png')
             } else {
                 //idoso
                 img.setAttribute('src', 'idosamulher.png')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Esta pessoa é do gênero ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}