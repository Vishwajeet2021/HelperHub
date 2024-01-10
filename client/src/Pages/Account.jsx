import React, { useState } from 'react';

const PaymentSection = () => {
  // State to manage stored cards
  const [storedCards, setStoredCards] = useState([
    { id: 1, type: 'Visa', last4Digits: '1234' },
    // Additional card objects can be added as needed
  ]);

  // State for new card input
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Function to add a new card to the stored cards
  const addNewCard = () => {
    // Implement logic to securely save the new card details
    // This would typically involve integration with a payment gateway and tokenization
    const newCardObject = {
      id: storedCards.length + 1,
      type: 'New Card', // Replace with actual card type detection logic
      last4Digits: newCard.cardNumber.slice(-4),
    };

    setStoredCards([...storedCards, newCardObject]);
    setNewCard({
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
  };

  return (
    <div>
      <h2>Payment Information</h2>

      <div>
        <h3>Stored Payment Methods</h3>
        <ul>
          {storedCards.map((card) => (
            <li key={card.id}>
              {card.type} ending in {card.last4Digits}
            </li>
          ))}
        </ul>
        <p>
          <a href="/manage-payment">Manage Stored Cards</a>
        </p>
      </div>

      <div>
        <h3>Add New Card</h3>
        <label>
          Card Number:
          <input
            type="text"
            value={newCard.cardNumber}
            onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            value={newCard.expirationDate}
            onChange={(e) => setNewCard({ ...newCard, expirationDate: e.target.value })}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={newCard.cvv}
            onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
          />
        </label>
        <button onClick={addNewCard}>Save Card</button>
      </div>

      <div>
        <h3>Security Assurance</h3>
        <p>Your security is our top priority. We follow industry standards to protect your data.</p>
      </div>
    </div>
  );
};

export default PaymentSection;
