import React, { useState } from "react";

export const DataCon = React.createContext();

export const DataContext = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Album 4",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [data, setData] = useState([]);

  const API =
    "https://crudcrud.com/api/936bf9fe005b4cdeb3e6b95e66cbc17b";

  // Get logged-in user's email
  const getUserEmail = () => {
    const email = localStorage.getItem("email");

    if (!email) return null;

    // CrudCrud URL doesn't accept @ and .
    return email.replace(/[@.]/g, "");
  };

  // GET cart items of currently logged-in user
  const fetchCartItems = async () => {
    const userEmail = getUserEmail();

    if (!userEmail) {
      setData([]);
      return;
    }

    try {
      const response = await fetch(`${API}/cart${userEmail}`);

      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }

      const cartData = await response.json();

      console.log("Cart data from backend:", cartData);

      // Combine same products and calculate quantity
      const updatedCart = [];

      cartData.forEach((item) => {
        const existingItem = updatedCart.find(
          (product) => product.id === item.id
        );

        if (existingItem) {
          existingItem.quantity += 1;
          existingItem._ids.push(item._id);
        } else {
          updatedCart.push({
            ...item,
            quantity: 1,
            _ids: [item._id],
          });
        }
      });

      setData(updatedCart);
    } catch (error) {
      console.log("GET cart error:", error);
    }
  };

  // ADD product to cart
  const addToCart = async (product) => {
    const userEmail = getUserEmail();

    if (!userEmail) {
      console.log("User is not logged in");
      return;
    }

    try {
      // POST every time user clicks Add to Cart
      const response = await fetch(`${API}/cart${userEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const createdProduct = await response.json();

      console.log("Product added to backend:", createdProduct);

      // Update React state
      setData((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  _ids: [...item._ids, createdProduct._id],
                }
              : item
          );
        }

        return [
          ...prevItems,
          {
            ...product,
            quantity: 1,
            _ids: [createdProduct._id],
          },
        ];
      });
    } catch (error) {
      console.log("POST cart error:", error);
    }
  };

  // REMOVE product completely from cart
  const removeFromCart = async (id) => {
    const userEmail = getUserEmail();

    const item = data.find((product) => product.id === id);

    if (!item || !userEmail) return;

    try {
      // Delete all backend records of this product
      for (const cartId of item._ids) {
        const response = await fetch(
          `${API}/cart${userEmail}/${cartId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
      }

      // Remove from React state
      setData((prevItems) =>
        prevItems.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log("DELETE cart error:", error);
    }
  };

  return (
    <DataCon.Provider
      value={{
        data,
        productsArr,
        addToCart,
        removeFromCart,
        fetchCartItems,
      }}
    >
      {props.children}
    </DataCon.Provider>
  );
};