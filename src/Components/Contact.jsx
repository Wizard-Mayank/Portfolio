import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
      <div className="text-7xl font-bold text-white mt-6">
        Let's Create Something{" "}
        <span className="text-[oklch(0.81_0.13_221.95)]">Amazing</span>.
      </div>
      <div className="ml-[8%]">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
