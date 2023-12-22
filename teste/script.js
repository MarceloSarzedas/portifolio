function setupCompra() {
  // Obtém referências aos elementos relevantes do HTML
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const addToCartBtns = document.getElementsByClassName('add-to-cart');

  // Cria um objeto para representar o carrinho de compras
  const cart = {
    items: [],
    total: 0,

    addItem: function(item) {
      this.items.push(item);
      this.total += item.price;
      this.updateUI();
    },

    removeItem: function(itemIndex) {
      const removedItem = this.items.splice(itemIndex, 1)[0];
      this.total -= removedItem.price;
      this.updateUI();
    },

    updateUI: function() {
      // Limpa os itens do carrinho de compras
      cartItems.innerHTML = '';

      // Adiciona os itens atualizados ao carrinho de compras
      this.items.forEach(function(item, index) {
        const li = document.createElement('li');
        li.innerText = item.name;
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remover';
        removeBtn.addEventListener('click', function() {
          cart.removeItem(index);
        });
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
      });

      // Atualiza o valor total do carrinho de compras
      cartTotal.innerText = 'Total: R$ ' + this.total.toFixed(2);
    }
  };

  // Adiciona um manipulador de evento para cada botão "Adicionar ao Carrinho"
  Array.from(addToCartBtns).forEach(function(btn) {
    btn.addEventListener('click', function() {
      const li = this.parentNode;
      const id = li.getAttribute('data-id');
      const name = li.getAttribute('data-name');
      const price = parseFloat(li.getAttribute('data-price'));
      const item = { id, name, price };
      cart.addItem(item);
    });
  });

  // Adiciona um manipulador de evento para o botão "Finalizar Compra"
  checkoutBtn.addEventListener('click', function() {
    alert('Compra finalizada com sucesso! Total: R$ ' + cart.total.toFixed(2));
    cart.items = [];
    cart.total = 0;
    cart.updateUI();
  });
}

// Chame a função setupCompra quando estiver pronto para ativar a função de compra
setupCompra();
