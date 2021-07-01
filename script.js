function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let anonascimento = document.getElementById('txtano')
    let resultado = document.getElementById('resul')

    if (anonascimento.value == 0 || Number(anonascimento.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        
    }
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    
    let sexo = document.getElementsByName('radsex')
    let idade = ano - Number(anonascimento.value)
    let genero = ''
    if (sexo [0].checked) {
        
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            
            img.setAttribute('src', 'img/foto-kid-m.png')
        } else if (idade < 26) {
            
            img.setAttribute('src', 'img/foto-jovem-m.png')
        } else if (idade < 60) {
            
            img.setAttribute('src', 'img/foto-adulto-m.png')
        } else {
            
            img.setAttribute('src', 'img/foto-idoso-m.png')
        }
    } else if (sexo [1].checked) {
        
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            
            img.setAttribute('src', 'img/foto-kid-f.png')
        } else if (idade < 26) {
            
            img.setAttribute('src', 'img/foto-jovem-f.png')
        } else if (idade < 60) {
            
            img.setAttribute('src', 'img/foto-adulto-f.png')
        } else {
            
            img.setAttribute('src', 'img/foto-idoso-f.png')
        }
    }
    
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resultado.appendChild(img)
}