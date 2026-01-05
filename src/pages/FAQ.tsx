import React from "react";

const faqs = [
  {
    question: "Are you an official cable or internet service provider?",
    answer:
      "No. We are an independent third-party assistance platform, not an official provider.",
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer:
      "No. We provide guidance and assistance only. We do not sell any plans.",
  },
  {
    question: "Do you charge for your services?",
    answer:
      "Yes. Our service fees are separate from any provider charges.",
  },
  {
    question: "Will I still be billed by my service provider?",
    answer:
      "Yes. Your provider billing remains unchanged. Our fees are for assistance only.",
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer:
      "No. We never request provider passwords or sensitive credentials.",
  },
  {
    question: "Which providers do you support?",
    answer:
      "We may reference multiple providers for guidance only; we have no affiliation with any provider.",
  },
  {
    question: "Are your services refundable?",
    answer:
      "Yes. Refund requests may be submitted within 7 to 15 days, subject to the terms outlined in our Refund Policy.",
  },
];

export default function FAQ() {
  return (
    <section className="container-wide section-padding">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
