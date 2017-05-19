$('document').ready(() => {
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  const orderIds = ['Royale with Cheese', 'Arugula Pie', 'Ice Cream Biscuit', 'Smoked Swine'];
  let address;
  let phone;

  function addToCart(itemId) {
    const card = document.getElementById(itemId).parentNode.parentNode;
    const newRow = document.createElement('tr');
    const name = document.createElement('td');
    const price = document.createElement('td');
    const cost = card.id * 1;


    name.innerHTML = (itemId);
    price.innerHTML = `$${cost}`;
    price.setAttribute('class', 'align-text-right');

    subTotal = +(subTotal + cost).toFixed(2);
    tax = +(subTotal * 0.07).toFixed(2);
    total = +(subTotal + tax).toFixed(2);

    document.getElementById('subtotal').innerHTML = `$${subTotal}`;
    document.getElementById('tax').innerHTML = `$${tax}`;
    document.getElementById('total').innerHTML = `$${total}`;

    newRow.appendChild(name);
    newRow.appendChild(price);
    document.getElementById('cart').appendChild(newRow);
  }

  for (let i = 0; i < orderIds.length; i++) {
    document.getElementById(orderIds[i]).addEventListener('click', function () {
      addToCart(this.id);
    });
  }

  document.getElementById('submit_order').addEventListener('click', () => {
    name = document.getElementById('icon_prefix').value;
    phone = document.getElementById('icon_telephone').value;
    address = document.getElementById('icon_address').value;

    if (subTotal === 0) {
      return Materialize.toast('Ops! There are no items in your cart.', 3000, 'rounded');
    } else if (!name || !address || !phone) {
      return Materialize.toast('Please ensure all fields are filled out.', 3000, 'rounded');
    }
    return Materialize.toast('Thank you! Your order is on it\'s way.', 3000, 'rounded');
  });

  $('.button-collapse').sideNav();
});
