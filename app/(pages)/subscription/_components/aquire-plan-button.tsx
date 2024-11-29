"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const AquirePlanButton = () => {
  const { user } = useUser();
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

  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium";
  if (hasPremiumPlan) {
    return (
      <Button
        className="w-full rounded-full"
        onClick={handleAquirePlanClick}
        variant={"link"}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_COSTUMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          Gerenciar Plano
        </Link>
      </Button>
    );
  }
  return (
    <Button className="w-full rounded-full" onClick={handleAquirePlanClick}>
      Adquirir Plano
    </Button>
  );
};

export default AquirePlanButton;
