function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
     var result = document.getElementById('res')
    if (form_ano.value.length == 0 || form_ano.value > ano) {
        window.alert('[ERRO] Informe uma data de nascimento menor que o ano atual!') 
    } else {
        var form_sex = document.getElementsByName
('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if(idade < 59) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (form_sex[1].checked) {
            genero = 'Mulher'
         if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'foto-crianca-f.png')
        } else if(idade < 59) {
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img) // para mostrar a foto
    }
}