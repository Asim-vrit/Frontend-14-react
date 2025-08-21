import React, { useState } from "react";
function Header() {
  const [cart, setCart] = useState(0);
  function updateState() {
    setCart(cart + 1);
  }
  console.log("i am header", cart);
  return (
    <header className="header">
      <ul>
        <li>
          {" "}
          <button onClick={updateState}>Cart{cart}</button>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
