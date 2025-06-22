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
