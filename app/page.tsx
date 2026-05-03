export default function Home() {
  const faqs = [
    {
      q: "How does the prediction work?",
      a: "We analyze your historical invoice and payment data — client behavior, invoice size, due dates, and seasonal patterns — to generate a confidence score for each outstanding invoice."
    },
    {
      q: "What data do I need to get started?",
      a: "Upload a CSV export from your invoicing tool (FreshBooks, QuickBooks, Wave, etc.) or connect via API. As little as 3 months of history produces useful predictions."
    },
    {
      q: "Is my financial data secure?",
      a: "All data is encrypted in transit and at rest. We never sell or share your data. You can delete your account and all associated data at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Invoice Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Which Invoices{" "}
          <span className="text-[#58a6ff]">Will Be Paid Late</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop chasing payments after the fact. InvoicePredict analyzes client history and invoice patterns to flag late-payment risk before it happens — so you can act early.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Predicting — $11/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for the first 7 days.</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Upload Your Data", desc: "Import invoices via CSV or connect your billing tool in minutes." },
            { step: "02", title: "AI Analyzes Patterns", desc: "Our model scores each invoice by late-payment probability and risk tier." },
            { step: "03", title: "Act Before It's Late", desc: "Get alerts and suggested actions — send reminders, adjust terms, or escalate." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-black mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$11<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoice predictions",
              "CSV upload & API integrations",
              "Risk dashboard with confidence scores",
              "Automated late-payment alerts",
              "Client risk profiles",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} InvoicePredict. All rights reserved.
      </footer>
    </main>
  );
}
