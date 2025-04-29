// Get payment details (Example: Fetching from local storage or backend)
document.addEventListener("DOMContentLoaded", () => {
  const paymentId =
    localStorage.getItem("razorpay_payment_id") || "Unavailable";
  document.getElementById("paymentId").textContent = paymentId;
});

// Redirect to Home Page
function redirectToHome() {
  window.location.href = "home.html";
}

// Redirect to Orders Page
function redirectToOrders() {
  window.location.href = "orders.html";
}
