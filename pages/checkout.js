// Replace with your Razorpay API Key from the Dashboard
const RAZORPAY_KEY = "your_razorpay_key"; // Add your actual Razorpay key here

// Total amount for the payment (ensure it matches the backend order)
const cartTotal = 150.0;
document.getElementById("totalAmount").textContent = cartTotal.toFixed(2);

// Add event listener for "Proceed to Payment" button
document.getElementById("checkoutBtn").addEventListener("click", () => {
  const isValid = validateShippingForm();
  if (isValid) {
    processPayment(cartTotal);
  } else {
    alert("Please fill in all the required shipping details.");
  }
});

// Validate the shipping form
function validateShippingForm() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const zip = document.getElementById("zip").value.trim();

  return name && address && city && zip;
}

// Payment Integration using Razorpay
function processPayment(amount) {
  const options = {
    key: RAZORPAY_KEY, // Replace with your Razorpay API Key
    amount: amount * 100, // Razorpay expects amount in paise (multiply by 100)
    currency: "USD", // Change as per your needs
    name: "AuctionHub",
    description: "Complete your payment",
    image: "https://your-logo-url.com/logo.png", // Replace with your logo URL
    handler: function (response) {
      alert(
        `Payment successful! Razorpay Payment ID: ${response.razorpay_payment_id}`
      );
      // Optionally redirect to success page or backend validation
      window.location.href = "success.html";
    },
    prefill: {
      name: document.getElementById("name").value,
      email: "customer@example.com", // Replace with authenticated user's email
      contact: "9999999999", // Replace with user's contact
    },
    theme: {
      color: "#2d3b40",
    },
  };

  const razorpay = new Razorpay(options);
  razorpay.open();
}

document.addEventListener("DOMContentLoaded", () => {
  const proceedToPayButton = document.getElementById("proceedToPay");

  proceedToPayButton.addEventListener("click", () => {
    // Simulate payment processing (optional for user experience)
    proceedToPayButton.innerText = "Processing...";
    proceedToPayButton.disabled = true;

    // Wait for 2 seconds before redirecting to simulate a real payment
    setTimeout(() => {
      // Redirect to the success page
      window.location.href = "success.html"; // Link to your success page
    }, 2000); // 2-second delay
  });
});
