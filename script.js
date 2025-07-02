function addToCart(productName) {
  alert(`"${productName}" added to cart.`);
  // You can expand this to use localStorage or build a cart system
}

function buyNow(productName) {
  const name = prompt("Enter your name:");
  const contact = prompt("Enter your contact info (phone/email):");
  if (!name || !contact) return alert("Please fill in all details.");

  const message = `Order Received!\n\nProduct: ${productName}\nName: ${name}\nContact: ${contact}`;

  alert(message);

  // TODO: Integrate EmailJS or other backend call here to send the order info to you
}
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`"${name}" added to cart.`);
}

function addToWishlist(name) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(name)) {
    wishlist.push(name);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`"${name}" added to your wishlist.`);
  } else {
    alert(`"${name}" is already in your wishlist.`);
  }
}
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
  });
</script>
