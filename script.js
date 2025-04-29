document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Casio G-Shock GA-140GB-1A1DR Black & Gold Analog-Digital Dial Black Resin",
      price: 100,
      condition: "weight 72 Grams.",
      countdown: "2024-12-22T10:00:00",
      stock: 10,
      description: "Anlog Watch & Gold Analog-Digital Dial Black Resin",
      condition:
        "Case diameter51.2 Millimetres band-colour black  material- type resin.",

      brand: "Casio G-shock",
      material: "type resin",
      warranty: "2 Years",
      images: [
        "../images/f2.1.jpg",
        "../images/f2.3.jpg",
        "../images/f2.4.jpg",
        "../images/f2.3.jpg",
      ],
    },
    {
      id: 2,
      name: "9L Oven Toaster griller",
      price: 150,
      condition: "good.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description: "colour - black  product Dimension 34.3D * 26.3W * 21.3 H.",
      brand: "AGARO",
      material: "stainless steel",
      warranty: "1 Year",
      images: [
        "../images/p7.1.jpg",
        "../images/p7.2.jpg",
        "../images/p7.3.jpg",
        "../images/p7.3.jpg",
      ],
    },

    {
      id: 3,
      name: "Women Westerly Chelsea Boots",
      price: 150,
      condition: "Brand new, regular fit.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        "Modern Chelsea boot crafted in water-resistant leather to help keep the element.",
      brand: "chelsea boots",
      material: "leather upper",
      warranty: "1 Year",
      images: [
        "../images/f6.1.jpg",
        "../images/f6.2.jpg",
        "../images/f6.3.jpg",
        "../images/f6.4.jpg",
      ],
    },
    {
      id: 4,
      name: "Deion Home Side Table for Bedroom",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description: "10D x 10W x 10H Centimeters Stool for Living Room.",
      brand: "Deion",
      material: "wooden",
      warranty: "1 Year",
      images: [
        "../images/u1.1.jpg",
        "../images/u1.2.jpg",
        "../images/u1.3.jpg",
        "../images/u1.4.jpg",
      ],
    },
    {
      id: 5,
      name: "Semi-Precious Bracelet ",
      price: 150,
      condition: "Natural Crystal Healing Stone.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        "Unisex both for Men & Women | 18beads Stretchable Bracelet | .",
      brand: "Chitshakti Lab Certified ",
      material: "typeStone",
      warranty: "1 Year",
      images: [
        "../images/f3.1.jpg",
        "../images/f3.2.jpg",
        "../images/f3.3.jpg",
        "../images/f3,4.jpg",
      ],
    },
    {
      id: 6,
      name: "New Look Bathroom Cabinet With ",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description: "Plastic Strong And Heavy  Cabinet With Mirror-White.",
      brand: "PARASNATH",
      material: "PLASTIC",
      warranty: "1 Year",
      images: [
        "../images/u5.1.webp",
        "../images/u5.2.jpg",
        "../images/u5.3.jpg",
        "../images/u5.4.jpg",
      ],
    },
    {
      id: 7,
      name: "Samsung 653 L, Smart Refrigerator ",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        " Frost Free, Double Door, Convertible 5-in-1 Digital Inverter, Side By Side AI Enabled Smart Refrigerator with WiFi .",
      brand: "SAMSUNG",
      material: "RS76CG8003B1HL, Black Matt, 2024 Mode",
      warranty: "1 Year",
      images: [
        "../images/P66.1.jpg",
        "../images/P66.2.jpg",
        "../images/P66.3.jpg",
        "../images/P66.4.jpg",
      ],
    },
    {
      id: 8,
      name: "Calixto Men's Designer  Floral Printed Necktie Tie ",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        "Microfibre Italian Designer, Floral Printed Necktie Tie With Pocket Square,Lapel Pin,Cufflinks (Leatharite Gift Box) (Pack of 4).",
      brand: "Calixto",
      material: "Cufflinks ",
      warranty: "1 Year",
      images: [
        "../images/f4.1.jpg",
        "../images/f4.3.jpg",
        "../images/f4.4.jpg",
        "../images/f4.1.jpg",
      ],
    },
    {
      id: 9,
      name: "Witty Wud Phantom Fabric Sectional Sofa ",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        " Dimensions	1.6D x 2.15W x 0.71H Meters|Colour	Royal Grey & Cool Cobalt.",
      brand: "Witty Wud",
      material: "pholstery Fabric Type	Fabric",
      warranty: "1 Year",
      images: [
        "../images/u2.1.webp",
        "../images/u2.2.jpg",
        "../images/u2.3.jpg",
        "../images/u2.4.jpg",
      ],
    },
    {
      id: 10,
      name: "Philips HL7756/01 750 Watt Mixer Grinde",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        " 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black.",
      brand: "PHILIPS",
      material: "Stainless Steel",
      warranty: "1 Year",
      images: [
        "../images/p8.1.jpg",
        "../images/p8.2.jpg",
        "../images/p8.3.jpg",
        "../images/p8.1.jpg",
      ],
    },
    {
      id: 11,
      name: "FLYING BERRY Women's Hand bag COMBO PACK",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        "Closure typeZipper Outer materialPolyurethane StyleHandbag With Slin.",
      brand: "FLYING BERRY",
      material: "Polyurethane",
      warranty: "1 Year",
      images: [
        "../images/f5.1.jpg",
        "../images/f5.2.jpg",
        "../images/f5.3.jpg",
        "../images/f5.4.jpg",
      ],
    },
    {
      id: 12,
      name: "Sheesham Wood 6 Seater Dining Table",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description:
        "4 Cushion Chairs & 1 Bench Wooden Furniture Six Seater Dinner Table Set for Living Room Home (Teak Finish).",
      brand: "WOODSTAGE",
      material: "Bench Wooden",
      warranty: "1 Year",
      images: [
        "../images/u3.1.jpg",
        "../images/u3.2.jpg",
        "../images/u3.3.jpg",
        "../images/u3.4.jpg",
      ],
    },
    {
      id: 13,
      name: "Wooden King Size Cot Without Storage - Solid Wood King Bed",
      price: 150,
      condition: "Brand new, sealed.",
      countdown: "2024-12-30T10:00:00",
      stock: 5,
      description: "Stylish Bedroom Furniture .",
      brand: "GADWAL FURNITURE ",
      material: "Titanium",
      warranty: "1 Year",
      images: [
        "../images/u4.2.jpg",
        "../images/u4.3.jpg",
        "../images/u4.4.jpg",
      ],
    },
  ];

  // Function to render products dynamically
  function renderProducts() {
    const container = document.getElementById("productsContainer");
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-details");

      productElement.innerHTML = `
      <div class="product-info">
        <h1>${product.name}</h1>
        <p><strong>Current Highest Bid:</strong>$<span id="currentBid${product.id}">${product.price}</span></p>
        <input type="number" id="userBid${product.id}" placeholder="Enter your bid" />
        <button class="btn btn-bid" id="placeBid${product.id}">Place Bid</button>
        
      </div>
    `;

      productElement.innerHTML = `
        <div class="product-gallery">
          <div class="main-image-container">
           <img id="mainImage${product.id}" src="${product.images[0]}" alt="${
        product.name
      }" />
          </div>
          <div class="thumbnails">
            ${product.images
              .map(
                (image, index) => `
              <img src="${image}" alt="Thumbnail ${
                  index + 1
                }" onclick="changeImage(this, ${product.id})" />
            `
              )
              .join("")}
          </div>
        </div>

        <div class="product-info">
          <h1>${product.name}</h1>
        <p class="price"><strong>Starting Bid:</strong> $${product.price}</p>
          <p><strong>Condition:</strong> ${product.condition}</p>
          <p><strong>Ending in:</strong> <span class="countdown" data-time="${
            product.countdown
          }" id="countdown${product.id}"></span></p>
          <p id="stockStatus${product.id}">Stock: <span id="stockCount${
        product.id
      }">${product.stock}</span></p>
          <p><strong>Current Highest Bid:</strong> $<span id="currentBid${
            product.id
          }">${product.price}</span></p>
          <input type="number" id="userBid${
            product.id
          }" placeholder="Enter your bid" />
          <button class="btn" id="addToCart${product.id}">Add to Cart</button>
          <button class="btn btn-bid" id="placeBid${
            product.id
          }">Place Bid</button>
          
        </div>

        <section class="product-description">
          <h2>Product Description</h2>
          <p>${product.description}</p>
          <ul>
            <li><strong>Brand:</strong> ${product.brand}</li>
            <li><strong>Material:</strong> ${product.material}</li>
            <li><strong>Warranty:</strong> ${product.warranty}</li>
          </ul>
        </section>

        <section class="product-reviews">
          <h2>Customer Reviews</h2>
          <div id="reviews${product.id}">
            <p>No reviews yet. Be the first to review!</p>
          </div>
          <form id="reviewForm${product.id}">
            <label for="reviewText${product.id}">Write a Review:</label>
            <textarea id="reviewText${
              product.id
            }" rows="4" placeholder="Share your thoughts"></textarea>
            <button type="submit" class="btn">Submit Review</button>
          </form>
        </section>
      `;

      container.appendChild(productElement);

      // Initialize countdown timer
      initializeCountdown(product.id, product.countdown);

      // Event listener for Place Bid button
      const placeBidButton = document.getElementById(`placeBid${product.id}`);
      placeBidButton.addEventListener("click", function () {
        const userBid = document.getElementById(`userBid${product.id}`).value;
        const currentBid = parseFloat(
          document.getElementById(`currentBid${product.id}`).textContent
        );

        if (userBid && parseFloat(userBid) > currentBid) {
          document.getElementById(`currentBid${product.id}`).textContent =
            userBid;
          alert(`Your bid of $${userBid} has been placed.`);
        } else {
          alert("Please enter a bid higher than the current bid.");
        }
      });

      // Add event listeners for Add to Cart button
      const addToCartButton = document.getElementById(`addToCart${product.id}`);
      addToCartButton.addEventListener("click", () => {
        const cartProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
        };

        // Retrieve existing cart items or initialize an empty array if none exist
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Check if the product already exists in the cart
        const existingProductIndex = cartItems.findIndex(
          (item) => item.id === cartProduct.id
        );

        if (existingProductIndex > -1) {
          // Product already in cart, increase quantity
          cartItems[existingProductIndex].quantity += 1;
        } else {
          // New product, add to cart
          cartItems.push(cartProduct);
        }

        // Save the updated cart to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        alert("Product added to cart!");
      });
    });
  }

  // Countdown functionality
  /// Countdown functionality
  function initializeCountdown(productId, endTime) {
    const countdownElement = document.getElementById(`countdown${productId}`);
    const endTimeDate = new Date(endTime);

    const updateCountdown = () => {
      const currentTime = new Date();
      const timeLeft = endTimeDate - currentTime;

      if (timeLeft <= 0) {
        countdownElement.textContent = "Auction Ended";
        return;
      }

      // Calculate remaining days
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

      // Format the time part (10:00 PM)
      const hours = endTimeDate.getHours();
      const minutes = endTimeDate.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour

      // Update countdown text
      countdownElement.textContent = ` ${days} day${
        days !== 1 ? "s" : ""
      } ${formattedHours}:${minutes} ${period}`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Handle Image Change on Thumbnail Click
  window.changeImage = (thumbnail, productId) => {
    const mainImage = document.getElementById(`mainImage${productId}`);
    mainImage.src = thumbnail.src;
  };

  // Initialize the page with the product data
  renderProducts();

  // Theme toggle functionality
  const themeToggleButton = document.getElementById("themeToggle");
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggleButton.textContent = document.body.classList.contains(
      "dark-mode"
    )
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });
});

// Cart page functionality
function renderCartItems() {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = ""; // Clear the existing items

  let totalAmount = 0;

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p>${item.name} - $${item.price} x ${item.quantity}</p>
      <button class="removeBtn" data-id="${item.id}">Remove</button>
      <button class="increaseQtyBtn" data-id="${item.id}">+</button>
      <button class="decreaseQtyBtn" data-id="${item.id}">-</button>
    `;

    // Add to total amount
    totalAmount += item.price * item.quantity;

    // Add event listener to remove button
    const removeButton = cartItemDiv.querySelector(".removeBtn");
    removeButton.addEventListener("click", () => {
      removeCartItem(item.id);
    });

    // Add event listeners for quantity adjustment
    const increaseButton = cartItemDiv.querySelector(".increaseQtyBtn");
    increaseButton.addEventListener("click", () => {
      updateItemQuantity(item.id, item.quantity + 1);
    });

    const decreaseButton = cartItemDiv.querySelector(".decreaseQtyBtn");
    decreaseButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        updateItemQuantity(item.id, item.quantity - 1);
      }
    });

    cartContainer.appendChild(cartItemDiv);
  });

  // Update total amount
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}

// Remove item from cart
function removeCartItem(itemId) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems = cartItems.filter((item) => item.id !== itemId);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartItems(); // Re-render the cart
}

// Handle checkout button click
const checkoutButton = document.getElementById("checkoutBtn");
checkoutButton.addEventListener("click", () => {
  alert("Proceeding to checkout...");
  // Redirect to checkout page or trigger checkout functionality
});

// Update item quantity in cart
function updateItemQuantity(itemId, newQuantity) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const item = cartItems.find((item) => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartItems(); // Re-render the cart
  }
}

const themeToggleButton = document.getElementById("themeToggle");
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Tab Navigation (if applicable)
function openTab(event, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-bid")) {
      const productId = parseInt(event.target.id.replace("placeBid", ""), 10);
      const product = products.find((item) => item.id === productId);

      Swal.fire({
        title: "Enter Your Bid",
        input: "text",
        inputLabel: "Bid Amount",
        inputPlaceholder: "Enter your bid amount",
        inputValidator: (value) => {
          const bidAmount = parseFloat(value);
          if (!value || isNaN(bidAmount) || bidAmount <= product.price) {
            return "Please enter a valid amount higher than the current bid!";
          }
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const bidAmount = parseFloat(result.value);

          // Update the current bid
          document.getElementById(`currentBid${product.id}`).textContent =
            bidAmount.toFixed(2);

          Swal.fire({
            title: "Bid Placed!",
            text: `Your bid of $${bidAmount.toFixed(
              2
            )} has been placed successfully.`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#28a745",
          });
        }
      });
    }
  });
});
