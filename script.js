
const menu = [
    { nome: "Panciotti Capesante e Gamberi", prezzo: "14€", descrizione: "ripieno capesante e gamberi burro e salvia" },
    { nome: "Spaghetti alla Carbonara", prezzo: "11€", descrizione: "pecorino, guanciale, pepe nero, tuorli" },
    { nome: "Linguine allo Scoglio", prezzo: "17€", descrizione: "cozze, vongole, gamberi, sale e pepe" },
    { nome: "Tagliatelle al Salmone", prezzo: "13€", descrizione: "salmone, panna e olio" }
];

let cart = [];

function displayMenu() {
    const menuContainer = document.getElementById('menu');
    menu.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `<h3>${item.nome}</h3><p>${item.descrizione}</p><strong>${item.prezzo}</strong><br><button onclick="addToCart(${index})">Aggiungi al Carrello</button>`;
        menuContainer.appendChild(div);
    });
}

function addToCart(index) {
    cart.push(menu[index]);
    alert(menu[index].nome + " aggiunto al carrello!");
}

function viewCart() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - ${item.prezzo}`;
        cartItems.appendChild(li);
    });
}

function goBack() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function submitOrder() {
    alert("Ordine inviato!");
    cart = [];
    goBack();
}

window.onload = displayMenu;
