function mostrarTelaCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("compras").style.display = "none";
    document.getElementById("detalhar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("toggle-menu");
    var menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

var cart = [];

function addToCart(id) {
    var product = cart.find((product) => product.id === id);
    if (product) {
        product.quantity += 1;
    } else {
        var title = document.getElementById("produto" + id).textContent;
        var price = parseFloat(document.getElementById("preco" + id).textContent.replace("Preço: $", ""));
        cart.push({ id, title, price, quantity: 1 });
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
    cart.forEach(function (product) {
        var productTotal = product.price * product.quantity;
        total += productTotal;
        cartTable.innerHTML += `
            <tr>
                <td>${product.title}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                    <button class="decrement-button" data-id="${product.id}">-</button>
                    <span class="quantity">${product.quantity}</span>
                    <button class="increment-button" data-id="${product.id}">+</button>
                </td>
                <td>${productTotal.toFixed(2)}</td>
                <td>
                    <button class="remove-button" data-id="${product.id}">Exc<button>
                    <button class="buy-button" data-id="${product.id}">Comp</button>
                </td>
            </tr>
        `;
    });    

    // Adiciona os botões de incremento e decremento
    var incrementButtons = cartTable.querySelectorAll('.increment-button');
    incrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var id = parseInt(button.getAttribute('data-id'));
            var product = cart.find((product) => product.id === id);
            if (product) {
                product.quantity += 1;
                updateCart();
            }
        });
    });

    var decrementButtons = cartTable.querySelectorAll('.decrement-button');
    decrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var id = parseInt(button.getAttribute('data-id'));
            var product = cart.find((product) => product.id === id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
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



