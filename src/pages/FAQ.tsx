import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How do I create an account at Baji Live Casino?",
      answer: "Creating an account is simple and takes just a few minutes. Click the 'Register' button, fill in your personal details, verify your email address, and you're ready to start playing. Make sure to use accurate information as it will be needed for withdrawals.",
    },
    {
      question: "Is it safe to play at Baji Live Casino?",
      answer: "Absolutely! Baji Live Casino is fully licensed and regulated. We use state-of-the-art SSL encryption to protect all your personal and financial information. Our games are regularly audited for fairness by independent testing agencies.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept a wide variety of payment methods including major credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and select cryptocurrencies. All transactions are processed securely and quickly.",
    },
    {
      question: "How long do withdrawals take?",
      answer: "Withdrawal times vary by payment method. E-wallets typically process within 24 hours, bank transfers take 3-5 business days, and card withdrawals take 3-7 business days. We aim to process all withdrawal requests as quickly as possible.",
    },
    {
      question: "Are there any bonuses for new players?",
      answer: "Yes! New players receive a generous welcome bonus package that includes a deposit match bonus and free spins. We also offer regular promotions, reload bonuses, and a VIP program for loyal players. Check our promotions page for current offers.",
    },
    {
      question: "Can I play on my mobile device?",
      answer: "Absolutely! Our casino is fully optimized for mobile devices. You can play all your favorite games on smartphones and tablets through your mobile browser. No download required - just visit our website and start playing instantly.",
    },
    {
      question: "What should I do if I have a gambling problem?",
      answer: "We take responsible gambling seriously. If you feel you may have a gambling problem, we offer several tools including deposit limits, session time limits, and self-exclusion options. We also provide links to professional gambling addiction support organizations.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 through live chat, email, and phone. You can access live chat directly from our website, email us at support@Baji Live.com, or call our toll-free number. We typically respond to emails within 2-4 hours.",
    },
    {
      question: "Are the games fair and random?",
      answer: "Yes, all our games use certified Random Number Generators (RNG) to ensure fair and random outcomes. Our games are regularly tested and audited by independent third-party organizations to maintain fairness and transparency.",
    },
    {
      question: "What is the minimum age to play?",
      answer: "You must be at least 18 years old (or the legal gambling age in your jurisdiction, whichever is higher) to create an account and play at Baji Live Casino. We strictly enforce age verification as part of our responsible gambling policy.",
    },
    {
      question: "Can I set limits on my account?",
      answer: "Yes, we offer various responsible gambling tools including deposit limits, loss limits, session time limits, and wagering limits. You can set these limits in your account settings at any time. We also offer cooling-off periods and self-exclusion options.",
    },
    {
      question: "Do you offer live dealer games?",
      answer: "Yes! We have an extensive live casino section featuring professional dealers streaming in real-time. You can play live blackjack, roulette, baccarat, poker, and many other games with real dealers and other players from around the world.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-casino-dark">
      {/* Hero Section */}
      <section className="py-16 bg-casino-darker">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about Baji Live Casino
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card key={index} className="casino-shadow overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-casino-accent casino-transition"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  <div
                    className={cn(
                      "overflow-hidden casino-transition-fast",
                      openItems.includes(index)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-16 text-center">
            <Card className="casino-shadow bg-casino-accent">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our support team is available 24/7 to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Live Chat</p>
                    <p className="text-primary font-semibold">Available 24/7</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-primary font-semibold">support@Bajilive.com</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-primary font-semibold">+1-800-GOLDEN</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;