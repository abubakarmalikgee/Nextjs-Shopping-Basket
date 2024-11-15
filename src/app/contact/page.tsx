"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement; // Explicitly cast e.target

    emailjs
      .sendForm(
        "service_3n5ei4b", // Service ID from EmailJS
        "template_hc1l7nb", // Template ID from EmailJS
        form, // Pass the form element here
        "hWjTWTJ4yFlq_r8bV" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("Thank you! Your message has been sent.");
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("Error:", error.text);
          setStatus("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="w-full grow flex items-center justify-center bg-base-100 py-12 px-4">
      <div className="max-w-md w-full space-y-4 bg-base-200 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-primary mb-4">
          Contact Us
        </h1>
        {status && (
          <div className="alert alert-info">
            <div>{status}</div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
