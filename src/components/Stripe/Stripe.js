import React, { useState, useEffect } from "react";
const stripe = require('stripe')('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');

const paymentIntent = stripe.paymentIntents.create({
  amount: .51,
  currency: 'USD',
  automatic_payment_methods: {enabled: true},
});

const ProductDisplay = () => (
  <div>
  <header>
    <title>buy new golf club</title>
  </header>
  <section>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
  </div>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


export default function Stripe() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}