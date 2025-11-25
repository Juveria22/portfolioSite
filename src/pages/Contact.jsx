import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_ydd9zqn", //  Gmail service ID from EmailJS
            "template_l1r85g8",  //  template ID from EmailJS
            formRef.current,
            "nd1cZapPt2H0JzNf0"    // public key from EmailJS
        )
        .then(
            () => {
              setSent(true);

              // fade out after 3 seconds
              setTimeout(() => {
                setSent(false);
              }, 3000);
            },
            (error) => {
              console.error("FAILED...", error.text);
              setStatus("Oops! Something went wrong.");
            }
        );
  };

  return (
    <div className="min-h-screen bg-mocha px-20 flex flex-col justify-center">

      <p className=" text-center text-cream max-w-4xl mx-auto mb-10">
        Whether you want to talk about projects, opportunities, AI or chat about our favorite cafes,
        I’d love to hear from you!
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-6xl mx-auto bg-matcha p-10 rounded-3xl shadow-sm pixel-bubble"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input type="hidden" name="to_email" value="aminjuveria00@gmail.com"/>
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full p-3 rounded-xl bg-light-sage/40 text-mocha placeholder-mocha/60 focus:outline-none pixel-bubble"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-xl bg-light-sage/40 text-mocha placeholder-mocha/60 focus:outline-none pixel-bubble"
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone"
            className="w-full p-3 rounded-xl bg-light-sage/40 text-mocha placeholder-mocha/60 focus:outline-none pixel-bubble"
          />
        </div>

        <textarea
          placeholder="Write your message here!"
          rows={6}
          required
          className="w-full p-4 rounded-xl bg-light-sage/40 text-mocha placeholder-mocha/50 focus:outline-none pixel-bubble"
        />

        <div className="flex flex-col items-center mt-8">
          <button className="px-10 py-3 bg-mocha text-white font-semibold rounded-xl shadow hover:bg-mocha transition pixel-bubble">
            Submit
          </button>

          {sent && (
            <p className="text-matcha font-semibold mt-4 animate-fade">
              Message sent!
            </p>
          )}
        </div>
      </form>
    </div>

  );
}
