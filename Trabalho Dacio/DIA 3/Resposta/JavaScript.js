function mostrarImagem() {
    let img = document.createElement("img");
    
    img.src = "Tabela_Jogos.png"; 
    img.alt = "Tabela de Jogos";
    img.style.width = "300px";
    img.style.display = "block";
    img.style.margin = "20px auto";

    document.body.appendChild(img);
}
