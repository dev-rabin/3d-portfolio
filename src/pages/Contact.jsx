import React, { useRef, useState } from 'react';
import emailJs from '@emailjs/browser';

const Contact = () => {

  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
  
  };

  const handleBlur = () => { };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailJs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Sahil",
        to_email: 'robinmandhotia@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setFeedbackMessage("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }).catch((err) => {
      setIsLoading(false);
      console.log(err);
      setFeedbackMessage("Failed to send message. Please try again.");
    });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14' ref={formRef}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className='input'
              required
              placeholder='Robin Mandhotia'
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name='email'
              className='input'
              required
              placeholder='example@gmail.com'
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
