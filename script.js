function converter() {
    var num = document.getElementById("valor");
    // buscar no html o que for inserido pelo usuario 

    num = num.value;
    // transformar o input de html pra valor inserido

    num = parseFloat(num);
    // trasnformar uma string em numerico


    var moeda = document.getElementById("exp");

    
    if (moeda.value==1) {
        valorFinal = num / 5.24;
        var valorFinalUSD = num + " BRL = " + parseFloat(valorFinal.toFixed(5)) + " USD";
    }
    if (moeda.value==2) {
        valorFinal = num / 0.85;
        var valorFinalUSD = num + " EURO = " + parseFloat(valorFinal.toFixed(5)) + " USD";
    }
    if (moeda.value==3) {
        valorFinal = num / 0.010;
        var valorFinalUSD = num + " PESO = " + parseFloat(valorFinal.toFixed(5)) + " USD";
    }

    document.getElementById("valorConvertido").innerHTML = valorFinalUSD;


    console.log(num);
    console.log(valorFinal);
}

