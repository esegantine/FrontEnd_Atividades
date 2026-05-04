function revelar(){

    document.getElementById("imagemJogador").src = "_vinicius_junior.png";

    document.getElementById("nomeTexto").innerText = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("Rank").innerText = "9,5";
    document.getElementById("Data_Nas").innerText = "12/07/2000 (25 anos)";
    document.getElementById("Altura").innerText = "1,76 m";
    document.getElementById("Posicao").innerText = "Ponta-esquerda / Atacante";

    let elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(function(el){
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });

}
