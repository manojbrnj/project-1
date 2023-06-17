import React from 'react';

export default function Navigation() {
  return (
    <nav className="container">
      <div className="logo ">
        <img src="../public/images/brand_logo.png" alt="" srcset="" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACTUS</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
