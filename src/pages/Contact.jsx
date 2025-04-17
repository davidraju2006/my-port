import React, { useState, useRef } from 'react';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ Name: '', Email: '', Phone: '', Message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission logic here
    // After submission, reset the form and loading state
    setLoading(false);
    setForm({ Name: '', Email: '', Phone: '', Message: '' });
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
        <input
          type="text"
          name="Name"
          value={form.Name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="Email"
          value={form.Email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          name="Phone"
          value={form.Phone}
          onChange={handleChange}
          placeholder="Your Phone"
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <textarea
          name="Message"
          value={form.Message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="p-2 bg-primary text-white rounded">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default Contact;
