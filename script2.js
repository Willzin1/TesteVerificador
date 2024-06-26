function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoUser = document.getElementById('anoNasc')
    var res = document.querySelector('div#div2')
    var img = document.getElementById('img')

    if (anoUser.value.length == '' || anoUser.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var sexoUser = document.getElementsByName('sexo')
        var idade = ano - Number(anoUser.value)
        var gen;
        
        if (sexoUser[0].checked) {
            gen = 'homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'crianca-H.jpg'
            }else if (idade < 21) {
                img.src = 'jovem-H.jpg'
            } else if (idade < 50) {
                img.src = 'adulto-H.jpg'
            }
            else {
                img.src = 'idoso.jpg'
            }

        } else {
            gen = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'crianca-M.jpg'
            }else if (idade < 21) {
                img.src = 'jovem-M.jpg'
            } else if (idade < 50) {
                img.src = 'adulto-M.jpg'
            }
            else {
                img.src = 'idosa.jpg'
            }
        }
       res.innerHTML = `Você é <strong>${gen}</strong> e possui ${idade} anos.`
       res.appendChild(img) // Para adcionar um elemento após ^^^^ 
    }
}