(function(){
    const form = document.querySelector('form');
    const resultado = document.querySelector('#resultado');
    const alturaInput = document.querySelector('#altura');
    const pesoInput = document.querySelector('#peso'); 
    

    form.addEventListener('submit', stopSubmit);

    function stopSubmit(e){
        e.preventDefault();
        calcularImc();
        escolherCategoria();
    }

    function calcularImc(){
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);
        let imc = peso / (altura*altura);
       
        imc = Math.round(imc*10) / 10;
        resultado.innerHTML = 'O seu IMC é:' + imc;


        if(imc>18.5 && imc < 24.9){
            if(resultado.className.length > 0){
                resultado.classList.remove(resultado.className)
                console.log(resultado.className)
            }
            resultado.classList.add('verde');
        }

        if(24.9 < imc && imc<= 29.9){
            if(resultado.className.length > 0){
                console.log(resultado.className)
                resultado.classList.remove(resultado.className)
            }
            resultado.classList.add('amarelo');
        }

        if(10 < imc && imc <=18.5 || imc >= 30 && imc <= 39.9){
            if(resultado.className.length > 0){
                console.log(resultado.className)
                resultado.classList.remove(resultado.className)
            }
            resultado.classList.add('laranja');
        }

        if(imc > 39.9 || imc < 10){
            if(resultado.className.length > 0){
                resultado.classList.remove(resultado.className)
                console.log(resultado.className)
            }
            resultado.classList.add('vermelho');
        }
        console.log(resultado.className)
        console.log(imc)
        return imc;
    
}

    function escolherCategoria(){
        let imc = calcularImc()
        if(imc<18.5){
            resultado.innerHTML += '<br>A sua classificação é: Baixo Peso'
        }
        else if(imc<=24.9){
            resultado.innerHTML += '<br>A sua classificaçao é: Peso Normal'
        }

        else if(imc<=29.9){
            resultado.innerHTML += '<br>A sua classificação é: Pré Obesidade'
        }
        else if(imc<=34.9){
            resultado.innerHTML += '<br>A sua classificação é: Obesidade Grau I'
        }
        else if(imc<=39.9){
            resultado.innerHTML += '<br>A sua classificação é: Obesidade Grau II'
        }
        else{
            resultado.innerHTML+= '<br>A sua classificação é: Obesidade Grau III'
        }
    }
 
    

})()