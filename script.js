function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resultado = document.querySelector('div#res');
    var imagem = document.querySelector('div#imagem');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            if (idade >= 0 && idade <= 10) {
                genero = 'Bebe menino';
                img.setAttribute('src', './imagens/bebe-menino.png');
            } else if (idade < 18) {
                genero = 'Menino';
                img.setAttribute('src', './imagens/menino.png');
            } else if (idade < 60) {
                genero = 'Homem';
                img.setAttribute('src', './imagens/homem.png');
            } else {
                genero = 'Idoso';
                img.setAttribute('src', './imagens/idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                genero = 'Bebe menina';
                img.setAttribute('src', './imagens/bebe-menina.png');
            } else if (idade < 18) {
                genero = 'Menina';
                img.setAttribute('src', './imagens/menina.png');
            } else if (idade < 60) {
                genero = 'Mulher';
                img.setAttribute('src', './imagens/mulher.png');
            } else {
                genero = 'Idosa';
                img.setAttribute('src', './imagens/idosa.png');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
        imagem.appendChild(img);
    }
}