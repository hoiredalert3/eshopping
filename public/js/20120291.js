"use strict";

const addCart = async (id, quantity) => {
  try {
    const response = await fetch("/products/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id, quantity }),
    });

    const result = await response.json();
    document.getElementById(
      "cart-quantity"
    ).textContent = `(${result.quantity})`;
    // console.log("Success:", result)
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateCart = async (id, quantity) => {
  if (quantity > 0) {
    try {
      const response = await fetch("/products/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id, quantity }),
      });

      if (response.status == 200) {
        const result = await response.json();
        document.getElementById(
          "cart-quantity"
        ).textContent = `(${result.quantity})`;
        document.getElementById(
          "subtotal"
        ).textContent = `(${result.subtotal})`;
        document.getElementById("total").textContent = `(${result.total})`;
        document.getElementById(
          `total${id}`
        ).textContent = `$${result.item.total}`;
        // console.log("Success:", result)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    removeFromCart(id);
  }
};

const removeFromCart = async (id) => {
  if (confirm("Do you really want to remove this product?")) {
    try {
      const response = await fetch("/products/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.status == 200) {
        const result = await response.json();

        if (result.quantity > 0) {
          document.querySelector(`tr#product${result.removedId}`).remove();
          document.getElementById(
            "cart-quantity"
          ).textContent = `(${result.quantity})`;
          document.getElementById(
            "subtotal"
          ).textContent = `$${result.subtotal}`;
          document.getElementById("total").textContent = `$${result.total}`;
        } else {
          document.getElementById("cart-quantity").textContent = 0;
          document.querySelector(
            ".cart-page .container"
          ).innerHTML = `<div class="text-center border py-3">
      <h3>Your cart is empty</h3>
    </div>`;
        }

        // console.log("Success:", result)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

const clearCart = async (id) => {
  if (confirm("Do you really want to clear your cart?")) {
    try {
      const response = await fetch("/products/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ clear: true }),
      });

      if (response.status == 200) {
        const result = await response.json();

        if (result.clear) {
          document.getElementById(
            "cart-quantity"
          ).textContent = `(${result.quantity})`;
          document.querySelector(
            ".cart-page .container"
          ).innerHTML = `<div class="text-center border py-3">
      <h3>Your cart is empty</h3>
    </div>`;
        }

        // console.log("Success:", result)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

const checkConfirmPassword = (formId) => {
  const password = document.querySelector(`#${formId} [name=password]`);
  const confirmPassword = document.querySelector(
    `#${formId} [name=confirmPassword]`
  );

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Confirm password does not match");
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity("");
  }
};
