import React, { useEffect } from "react";

function PhoneShoppingMart() {
  useEffect(() => {
    // This function will run when the DOM is fully loaded
    const addToCartButtons = document.querySelectorAll(".btn-outline-dark"); // Select all "Add to Cart" buttons
    const cartBadge = document.querySelector(".badge"); // Select the cart badge

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        const currentItem = event.target.closest(".card"); // Find the closest parent with the 'card' class
        const itemName = currentItem
          .querySelector(".fw-bolder")
          .textContent.trim(); // Get the item name

        if (button.textContent === "Add to Cart") {
          button.textContent = "Remove from Cart"; // Change button text to "Remove from Cart"
          button.classList.remove("btn-outline-dark");
          button.classList.add("btn-danger");

          const currentCount = parseInt(cartBadge.textContent);
          cartBadge.textContent = currentCount + 1; // Increase cart quantity

          // Here you can add the logic to add the item to the cart
          // For now, let's just log the item name
          console.log(`Added ${itemName} to cart`);
        } else {
          button.textContent = "Add to Cart"; // Change button text back to "Add to Cart"
          button.classList.remove("btn-danger");
          button.classList.add("btn-outline-dark");

          const currentCount = parseInt(cartBadge.textContent);
          cartBadge.textContent = currentCount - 1; // Decrease cart quantity

          // Here you can add the logic to remove the item from the cart
          // For now, let's just log the item name
          console.log(`Removed ${itemName} from cart`);
        }
      });
    });
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      {/* Your JSX component code goes here */}
      {/* Make sure to include the necessary HTML structure */}
    </>
  );
}

export default PhoneShoppingMart;
