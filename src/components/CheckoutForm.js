import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="form">
      <form onSubmit={handleConfirm}>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <div>
          <button
            className="rounded-lg justify-between py-1 px-2 bg-slate-500 text-white"
            type="submit"
          >
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
