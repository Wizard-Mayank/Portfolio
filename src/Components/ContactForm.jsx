import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzdkbqpr");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <h2 className="text-[#48d3fd] text-2xl font-bold mb-4 animate-bounce">
          Input received!
        </h2>
        <p className="text-white opacity-80">
          Thanks for reaching out. Neural networks are processing your
          message...
        </p>
      </div>
    );
  }

  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                required
                name="name"
                placeholder="Name"
                className="input-field"
                type="text"
              />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <div className="form-field">
              <input
                required
                name="email"
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <div className="form-field">
              <input
                required
                name="subject"
                placeholder="Subject"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <textarea
                required
                name="message"
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
              />
            </div>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="sendMessage-btn"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 0.625rem;
    padding-inline: 2rem;
    padding-bottom: 0.4rem;
    background-color: #171717;
    border-radius: 1.25rem;
  }

  .form-heading {
    text-align: center;
    margin: 2rem;
    color: #48d3fd;
    font-size: 1.2rem;
    background-color: transparent;
    align-self: center;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 0.625rem;
    padding: 0.6rem;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 0.125rem 0.3125rem 0.625rem rgb(5, 5, 5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1rem;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3rem;
    padding: 1rem;
    border-radius: 0.625rem;
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    outline: 0.0625rem solid #48d3fd;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .sendMessage-btn:hover:not(:disabled) {
    background-color: #48d3fd;
    color: #000;
    box-shadow: inset 0.125rem 0.3125rem 0.625rem rgb(5, 5, 5);
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #48d3fd 0%, #48d3fd 100%);
    border-radius: 1.375rem;
    transition: all 0.3s;
    width: 80%;
  }

  .form-card1:hover {
    box-shadow: 0rem 0rem 1.875rem 0.0625rem #48d3fd;
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 1.25rem;
  }
`;

export default ContactForm;
