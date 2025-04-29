document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic Validation
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Email Validation (basic)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If everything is valid
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset(); // Reset the form after submission
  });
