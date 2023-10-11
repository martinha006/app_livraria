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


// Seu código JavaScript
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu");
    var toggleMenuBtn = document.getElementById("toggle-menu-btn");

    toggleMenuBtn.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    });
});


// let carrinho = [];
// let total = 0;

// function adicionarItem(nome, preco, imagem) {
//     const itemExistente = carrinho.find(item => item.nome == nome);

//     if (itemExistente) {
//         itemExistente.quantidade++;
//     } else {
//         carrinho.push({ nome, preco, quantidade: 1, imagem });
//     }

//     total += preco;
//     atualizarCarrinho();
// }

// function atualizarCarrinho() {
//     const carrinhoLista = document.getElementById("carrinho-lista");
//     const carrinhoTotal = document.getElementById("carrinho-total");

//     carrinhoLista.innerHTML = "";
//     carrinhoTotal.textContent = total.toFixed(2);

//     carrinho.forEach(item => {
//         const li = document.createElement("li");
//         li.innerHTML = `<img src="${item.imagem}" alt="Imagem do Produto" width="100"> 
//             ${item.nome} | R$ ${item.preco.toFixed(2)} | Quantidade: ${item.quantidade} 
//             <button onclick="removerItem('${item.nome}', ${item.preco})">-</button>
//             <button onclick="adicionarItem('${item.nome}', ${item.preco}, '${item.imagem}')">+</button>`;
//         carrinhoLista.appendChild(li);
//     });
// }

// function removerItem(nome, preco) {
//     const itemExistente = carrinho.find(item => item.nome == nome);

//     if (itemExistente) {
//         if (itemExistente.quantidade == 1) {
//             carrinho = carrinho.filter(item => item.nome !== nome);
//         } else {
//             itemExistente.quantidade--;
//         }

//         total -= preco;
//         atualizarCarrinho();
//     }
// }
//                 <button type="button" onclick="adicionarItem('Título do Produto2', 10.99, '1.JPG')">Adicionar ao Carrinho</a></button>
{/* <div id="carrinho">
<h2>Carrinho de Compras</h2>
<ul id="carrinho-lista">
    <!-- Itens do carrinho serão inseridos aqui dinamicamente -->
</ul>
<p>Total: R$ <span id="carrinho-total">0</span></p>
</div> */}



