"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
const AquirePlanButton = () => {
  const handleAquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABE_KEY) {
      throw new Error("Stripe publishabe key not found");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABE_KEY,
    );

    if (!stripe) {
      throw new Error("Stripe not found");
    }

    await stripe.redirectToCheckout({ sessionId });
  };
  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAquirePlanClick}
    >
      Adquirir Plano
    </Button>
  );
};

export default AquirePlanButton;
