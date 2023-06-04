"use strict"

const addCart = async (id, quantity) => {
  try {
    const response = await fetch("/products/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ id, quantity }),
    })

    const result = await response.json()
    document.getElementById(
      "cart-quantity"
    ).textContent = `(${result.quantity})`
    // console.log("Success:", result)
  } catch (error) {
    console.error("Error:", error)
  }
}
