import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Anyone interested in tech and innovation — students, beginners, coders, designers — all are welcome!"
  },
  {
    question: "Is it an online or offline event?",
    answer: "It’s an offline event at St. Xavier's College, Ranchi. Be there to experience the buzz in person!"
  },
  {
    question: "What should I bring?",
    answer: "Laptop, charger, student ID, and most importantly — your ideas and enthusiasm."
  },
  {
    question: "Do I need a team?",
    answer: "You can join solo or with a team (up to 4 members). If you’re solo, we can match you with other participants."
  },
  {
    question: "Are there prizes?",
    answer: "Absolutely! Expect exciting prizes, goodies, and exclusive swags for winners and participants."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, it’s completely free! Just sign up and join the fun."
  }
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Your doubts, cleared before liftoff 🚀
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="cosmic-glass rounded-lg overflow-hidden cosmic-glow">
              {/* Question */}
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="cosmic-glass p-6 rounded-lg inline-block">
            <p className="text-muted-foreground mb-2">Still have questions?</p>
            <p className="text-primary font-semibold">Contact us</p>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 text-8xl opacity-10 cosmic-float">
            ❓
          </div>
          <div className="absolute bottom-1/4 -left-20 text-8xl opacity-10 cosmic-float" style={{ animationDelay: '2s' }}>
            💡
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;