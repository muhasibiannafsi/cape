const menuData = {
  "Makanan": {
    "Makanan Berat": [
      { name: "Nasi Goreng", price: 15000 },
      { name: "All Rice Bowl", price: 15000 },
      { name: "Omelet", price: 25000 },
      { name: "sukuna", price: 25000 }
    ],
    "Makanan Ringan": [
      { name: "Kentang Goreng", price: 15000 },
      { name: "Scrlet Sorgum", price: 35000 },
      { name: "Burger Bigoal", price: 37000 },
      { name: "Pie Nich", price: 15000 }
    ]
  },

  "Minuman": {
    "Coffee": [
      { name: "Espresso", price: 37000 },
      { name: "Americano", price: 58000 },
      { name: "Cortado", price: 37000 },
      { name: "Latte", price: 27000 },
      { name: "Cappuccino", price: 67000 },
      { name: "Mocha", price: 94000 },
      { name: "Flat White", price: 97000 }
    ],

    "Matcha": [
      { name: "Matcha Latte", price: 197000 },
      { name: "Dirty Matcha", price: 67000 },
      { name: "Strawberry Matcha Latte", price: 107000 },
      { name: "Matcha Frappe", price: 156000 },
      { name: "Thai Green Tea", price: 187000 },
      { name: "Matcha Lemonade", price: 132000 },
      { name: "Genmaicha", price: 127000 },
      { name: "Matchagato", price: 156000 },
      { name: "Coconut Matcha", price: 298000 },
      { name: "Hojicha Latte", price: 276000 }
    ],

    "Jus": [
      { name: "Jus Alpukat", price: 28000 },
      { name: "Jus Jeruk", price: 28000 },
      { name: "Jus Mangga", price: 28000 },
      { name: "Jus Stroberi", price: 28000 },
      { name: "Jus Buah Naga", price: 28000 },
      { name: "Jus Semangka Mint", price: 34000 },
      { name: "Jus Nanas", price: 28000 },
      { name: "Jus Sirsak", price: 28000 },
      { name: "Jus Apel", price: 28000 },
      { name: "Jus Jambu", price: 28000 }
    ],

    "Tradisional": [
      { name: "Wedang Jahe", price: 15000 },
      { name: "Bandrek", price: 18000 },
      { name: "Bajigur", price: 18000 },
      { name: "Kunir Asem", price: 20000 },
      { name: "Beras Kencur", price: 20000 },
      { name: "Wedang Uwuh", price: 15000 },
      { name: "Bir Pletok", price: 25000 },
      { name: "Sekoteng", price: 20000 },
      { name: "Wedang Ronde", price: 20000 },
      { name: "Es Dawet Ayu", price: 15000 }
    ],

    "Tea": [
      { name: "Es Teh Manis", price: 10000 },
      { name: "Lemon Tea", price: 15000 },
      { name: "Lychee Tea", price: 22000 },
      { name: "Peach Tea", price: 32000 },
      { name: "Earl Grey Tea", price: 18000 },
      { name: "English Breakfast Tea", price: 18000 },
      { name: "Chamomile Tea", price: 20000 },
      { name: "Peppermint Tea", price: 20000 },
      { name: "Jasmine Tea", price: 15000 },
      { name: "Thai Tea", price: 18000 }
    ]
  }
};

let cart = [];

function formatRupiah(num) {
  return "Rp." + num.toLocaleString("id-ID");
}

// 🖼️ GAMBAR
function getImage(name) {
  const images = {

    "Nasi Goreng": "images/nasi goreng.jpg",
    "All Rice Bowl": "images/All Rice Bowl.jpg",
    "Omelet": "images/Omelet.jpg",
    "sukuna": "images/sukuna.jpg",
    "Kentang Goreng": "images/Kentang Goreng.jpg",
    "Scrlet Sorgum": "images/Scrlet Sorgum.jpg",
    "Burger Bigoal": "images/Burger Bigoal.jpg",
    "Pie Nich": "images/Pie Nichi.jpg",
    "Espresso": "images/Espresso.jpg",
    "Americano": "images/Americano.jpg",
    "Cortado": "images/Cortado.jpg",
    "Latte": "images/Latte.jpg",
    "Cappuccino": "images/Cappuccino.jpg",
    "Mocha": "images/Mocha.jpg",
    "Flat White": "images/Flat White.jpg",
    "Matcha Latte": "images/Matcha Latte.jpg",
    "Dirty Matcha": "images/Dirty Matcha.jpg",
    "Strawberry Matcha Latte": "images/Strawberry Matcha Latte.jpg",
    "Matcha Frappe": "images/Matcha Frappe.jpg",
    "Thai Green Tea": "images/Thai Green Tea.jpg",
    "Matcha Lemonade": "images/Matcha Lemonade.jpg",
    "Genmaicha": "images/Genmaicha.jpg",
    "Matchagato": "images/Matchagato.jpg",
    "Coconut Matcha": "images/Coconut Matcha.jpg",
    "Hojicha Latte": "images/Hojicha Latte.jpg",
    "Jus Alpukat": "images/Jus Alpukat.jpg",
    "Jus Jeruk": "images/Jus Jeruk.jpg",
    "Jus Mangga": "images/Jus Mangga.jpg",
    "Jus Stroberi": "images/Jus Stoberi.jpg",
    "Jus Buah Naga": "images/Jus Buah Naga.jpg",
    "Jus Semangka Mint": "images/Jus Semangka Mint.jpg",
    "Jus Nanas": "images/Jus Nanas.jpg",
    "Jus Sirsak": "images/Jus Sirsak.jpg",
    "Jus Apel": "images/Jus Aple.jpg",
    "Jus Jambu": "images/Jus Jambu.jpg",
    "Wedang Jahe": "images/Wedang Jahe.jpg",
    "Bandrek": "images/Bandrek.jpg",
    "Bajigur": "images/Bajigur.jpg",
    "Kunir Asem": "images/Kunir Asem.jpg",
    "Beras Kencur": "images/Beras Kencur.jpg",
    "Wedang Uwuh": "images/Wedang Uwuh.jpg",
    "Bir Pletok": "images/Bir Pletok.jpg",
    "Sekoteng": "images/Sekoteng.jpg",
    "Wedang Ronde": "images/Wedang Ronde.jpg",
    "Es Dawet Ayu": "images/Es Dawet Ayu.jpg",
    "Es Teh Manis": "images/Es Teh Manis.jpg",
    "Lemon Tea": "images/Lemon Tea.jpg",
    "Lychee Tea": "images/Lychee Tea.jpg",
    "Peach Tea": "images/Peach Tea.jpg",
    "Earl Grey Tea": "images/Earl Grey Tea.jpg",
    "English Breakfast Tea": "images/English Breakfast Tea.jpg",
    "Chamomile Tea": "images/Chamomile Tea.jpg",
    "Peppermint Tea": "images/Peppermint Tea.jpg",
    "Jasmine Tea": "images/Jasmine Tea.jpg",
    "Thai Tea": "images/Thai Tea.jpg",

  };
  return images[name] || "images/default.jpg";
}

// 🛒 TAMBAH ITEM
function addToCart(item) {
  const found = cart.find(i => i.name === item.name);
  if (found) {
    found.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

// ➕➖❌
function addQty(index) {
  cart[index].qty++;
  renderCart();
}

function minQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  renderCart();
}

function deleteItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// 🛒 RENDER CART
function renderCart() {
  const list = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";
  let total = 0;

  cart.forEach((i, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${i.name} (${i.qty}) - ${formatRupiah(i.price * i.qty)}
      <button onclick="addQty(${index})">+</button>
      <button onclick="minQty(${index})">-</button>
      <button onclick="deleteItem(${index})">x</button>
    `;

    list.appendChild(li);
    total += i.price * i.qty;
  });

  totalEl.textContent = formatRupiah(total);
}

// 🧾 STRUK
function printReceipt() {
  let text = "=== NOTA ===\n\n";
  let total = 0;

  cart.forEach(i => {
    text += `${i.name} x${i.qty} = ${formatRupiah(i.price * i.qty)}\n`;
    total += i.price * i.qty;
  });

  text += `\nTOTAL: ${formatRupiah(total)}`;

  const win = window.open("", "", "width=300,height=400");
  win.document.write("<pre>" + text + "</pre>");
  win.print();
}

// 📱 QR CODE
function generateQR() {
  const url = window.location.href;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
  document.getElementById("qr").src = qr;
}

// 🎯 MENU
function createMenu() {
  const container = document.getElementById("menu");

  for (let category in menuData) {
    let catDiv = document.createElement("div");
    catDiv.innerHTML = `<h2>${category}</h2>`;

    for (let sub in menuData[category]) {
      let subDiv = document.createElement("div");
      subDiv.innerHTML = `<h3>${sub}</h3>`;

      menuData[category][sub].forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "item";

        itemDiv.innerHTML = `
          <div class="item-info">
            <img src="${getImage(item.name)}">
            <span>${item.name}</span>
          </div>
          <span>${formatRupiah(item.price)}</span>
        `;

        itemDiv.onclick = () => addToCart(item);

        subDiv.appendChild(itemDiv);
      });

      catDiv.appendChild(subDiv);
    }

    container.appendChild(catDiv);
  }
}

createMenu();
generateQR();