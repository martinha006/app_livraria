// function mostrarTelaCadastro() {
//     document.getElementById("login").style.display = "none";
//     document.getElementById("cadastro").style.display = "block";
    // document.getElementById("compras").style.display = "none";
    // document.getElementById("detalhar").style.display = "none";
// }

document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("toggle-menu");
    var menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

var cart = [];

function addToCart(id) {
    var produto = cart.find((produto) => produto.id === id);
    if (produto) {
        produto.qtd += 1;
    } else {
        var title = document.getElementById("produto" + id).textContent;
        var price = parseFloat(document.getElementById("preco" + id).textContent.replace("Preço: $", ""));
        cart.push({ id, title, price, qtd: 1 });
    }

    updateCart();
}

function updateCart() {
    var cartElement = document.getElementById('menu');
    var cartTable = cartElement.querySelector('table');
    cartTable.innerHTML = '';

    cartTable.innerHTML = `
        <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Qtd</th>
            <th>Total</th>
            <th>Ações</th> 
        </tr>
    `;

    var total = 0;
    cart.forEach(function (produto) {
        var produtoTotal = produto.price * produto.qtd;
        total += produtoTotal;
        cartTable.innerHTML += `
            <tr>
                <td>${produto.title}</td>
                <td>${produto.price.toFixed(2)}</td>
                <td>
                    <button class="decrement-button" data-id="${produto.id}">-</button>
                    <span class="qtd">${produto.qtd}</span>
                    <button class="increment-button" data-id="${produto.id}">+</button>
                </td>
                <td>${produtoTotal.toFixed(2)}</td>
                <td>
                    <button class="remove-button" data-id="${produto.id}">E<button> 
                    <button class="buy-button" data-id="${produto.id}">C</button>
                </td>
            </tr>
        `;
    }); 

    //incremento
    var incrementButtons = cartTable.querySelectorAll('.increment-button');
    incrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var id = parseInt(button.getAttribute('data-id'));
            var produto = cart.find((produto) => produto.id == id);
            if (produto) {
                produto.qtd += 1;
                updateCart();
            }
        });
    });
    //decremento
    var decrementButtons = cartTable.querySelectorAll('.decrement-button');
    decrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var id = parseInt(button.getAttribute('data-id'));
            var produto = cart.find((produto) => produto.id == id);
            if (produto && produto.qtd > 1) {
                produto.qtd -= 1;
                updateCart();
            }
        });
    });
}


var comprarButtons = document.querySelectorAll('.comprar-button');
comprarButtons.forEach(function (button) {
    var id = parseInt(button.getAttribute('data-id'));
    button.addEventListener('click', function () {
        addToCart(id);
    });
});




//function mostrarTelaCompras() {
//    document.getElementById("login").style.display = "none";
//    document.getElementById("cadastro").style.display = "none";
//    document.getElementById("compras").style.display = "block";
//    document.getElementById("detalhar").style.display = "none";
//}

//function mostrarTelaDetalhar() {
//    document.getElementById("login").style.display = "none";
//    document.getElementById("cadastro").style.display = "none";
//    document.getElementById("compras").style.display = "none";
//    document.getElementById("detalhar").style.display = "block";
//}

// document.addEventListener("DOMContentLoaded", function() {
//     var menu = document.getElementById("menu");
//     var toggleMenuBtn = document.getElementById("toggle-menu-btn");

//     toggleMenuBtn.addEventListener("click", function() {
//         menu.classList.toggle("hidden");
//     });
// });
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



