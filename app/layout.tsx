import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoicePredict — Predict Which Invoices Will Be Paid Late",
  description:
    "Analyze client payment history and invoice patterns to predict late payments with confidence scores. Built for freelancers, agencies, and B2B service providers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="54f63fd8-74dd-4fb7-ae80-a96855f60dfb"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
