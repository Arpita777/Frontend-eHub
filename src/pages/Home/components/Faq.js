import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Why should I use Frontend eHub?",
      answer:
        "Frontend eHub is a curated platform for high-quality frontend and web development eBooks. Whether you’re a beginner or an experienced developer, you’ll find practical, up-to-date resources that focus on real-world skills, best practices, and modern tools.",
    },
    {
      id: 2,
      question: "Can I access my eBook on mobile?",
      answer:
        "Yes. All eBooks purchased from Frontend eHub are accessible on mobile, tablet, and desktop devices. You can read your books anytime, anywhere, without being tied to a single device.",
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer:
        "If you face any issues with your purchase, feel free to reach out to our support team. Refunds are handled on a case-by-case basis to ensure a fair experience for both readers and authors.",
    },
    {
      id: 4,
      question: "Do you support international payments?",
      answer:
        "Yes, Frontend eHub supports international payments, allowing users from different countries to securely purchase eBooks using commonly accepted payment methods.",
    },
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind 💡🧠 ?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map(({ id, question, answer }) => (
          <Accordion key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};
