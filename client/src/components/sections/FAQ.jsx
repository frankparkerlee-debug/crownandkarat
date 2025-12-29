import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    question: 'How do I know I\'m getting a fair price?',
    answer: 'We provide transparent market-based pricing. Our offers are based on current wholesale values, recent auction results, and real-time market data. We\'ll explain exactly how we arrived at your offer.',
  },
  {
    question: 'How long does the process take?',
    answer: 'Most transactions are completed within 24-48 hours. You\'ll receive an initial offer within 2 hours of submission, and once you accept, payment is sent the same day we receive and verify your item.',
  },
  {
    question: 'Is my item insured during shipping?',
    answer: 'Yes, we provide fully insured, prepaid shipping labels for all items. Coverage is based on your item\'s estimated value, and we track every package from pickup to delivery.',
  },
  {
    question: 'What if I change my mind?',
    answer: 'No problem at all. If you decide not to sell after receiving our offer, we\'ll return your item via insured shipping at no cost to you. There\'s zero obligation.',
  },
  {
    question: 'Do you buy items that need repair?',
    answer: 'Absolutely. We buy watches and jewelry in any condition — working or not. Items needing repair may affect the offer, but we\'re often interested where others aren\'t.',
  },
  {
    question: 'How do I get paid?',
    answer: 'We offer same-day payment via wire transfer, ACH, or check — your choice. Once we verify your item matches the description, payment is sent immediately.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-container">
      <SectionHeading
        tag="FAQ"
        title="Common Questions"
        subtitle="Everything you need to know about selling with us."
      />

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10">
            <button
              onClick={() => toggle(index)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <span className="text-cream font-medium pr-4 group-hover:text-gold transition-colors">
                {faq.question}
              </span>
              <span className={`text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-cream-muted leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
