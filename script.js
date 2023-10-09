function mostrarTelaCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("compras").style.display = "none";
    document.getElementById("detalhar").style.display = "none";
}

function mostrarTelaCompras() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("compras").style.display = "block";
    document.getElementById("detalhar").style.display = "none";
}

function mostrarTelaDetalhar() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("compras").style.display = "none";
    document.getElementById("detalhar").style.display = "block";
}

function aumentarQuantidade(row) {
    var quantidadeElement = row.querySelector('.quantidade');
    var quantidade = parseInt(quantidadeElement.textContent);
    quantidade += 1;
    quantidadeElement.textContent = quantidade;
}




