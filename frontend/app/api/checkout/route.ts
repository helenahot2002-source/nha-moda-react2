import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductById } from "@/lib/store";

export async function POST(request: Request) {
  const formData = await request.formData();
  const productId = formData.get("productId");
  const fallbackUrl = new URL("/checkout/cancel", request.url);

  if (typeof productId !== "string") {
    fallbackUrl.searchParams.set("reason", "produto-invalido");
    return NextResponse.redirect(fallbackUrl, 303);
  }

  const product = getProductById(productId);

  if (!product) {
    fallbackUrl.searchParams.set("reason", "produto-nao-encontrado");
    return NextResponse.redirect(fallbackUrl, 303);
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    fallbackUrl.searchParams.set("reason", "stripe-nao-configurado");
    return NextResponse.redirect(fallbackUrl, 303);
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const successUrl = new URL("/checkout/success", request.url);
    const cancelUrl = new URL("/checkout/cancel", request.url);

    successUrl.searchParams.set("item", product.slug);
    cancelUrl.searchParams.set("item", product.slug);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl.toString(),
      cancel_url: cancelUrl.toString(),
      billing_address_collection: "required",
      customer_creation: "always",
      metadata: {
        productId: product.id,
        productSlug: product.slug,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "xof",
            // XOF e zero-decimal no Stripe: 25000 significa XOF 25.000.
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: product.shortDescription,
              images: [new URL(product.image, request.url).toString()],
            },
          },
        },
      ],
    });

    if (!session.url) {
      cancelUrl.searchParams.set("reason", "sessao-sem-link");
      return NextResponse.redirect(cancelUrl, 303);
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Erro ao criar sessao Stripe", error);
    fallbackUrl.searchParams.set("reason", "erro-no-checkout");
    return NextResponse.redirect(fallbackUrl, 303);
  }
}
