import React from 'react';
import styles from '../styles/Form.module.css';
import button from '../styles/Button.module.css';

export default function ContactUsForm()
{
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [submit, setSubmit] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (att: string, value: string) =>
  {
    att === "name" && setContact({ ...contact, name: value })
    att === "email" && setContact({ ...contact, email: value });
    att === "phone" && setContact({ ...contact, phone: value });
    att === "comments" && setContact({ ...contact, comments: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          comments: contact.comments,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmit(true);
      } else {
        setError(data.message || "There was an error submitting your form. Please try again.");
      }
    } catch (err) {
      setError("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {!submit ?
        <>
          <p>If you have any questions regarding Academy Dublin please use the form below. We will be
            in touch with you as soon as we can.</p>
          <div><label>
            <input
              name="name"
              type="text"
              placeholder="Full Name *"
              required
              value={contact.name}
              onChange={(e) => handleChange('name', (e.target.value).toString())}
            />
          </label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id='email'
              placeholder='Email address *'
              required
              value={contact.email}
              onChange={(e) => handleChange('email', (e.target.value).toString())}
            />
          </div>
          <div>
            <input
              name="phone"
              type="text"
              placeholder="Contact phone number *"
              required
              value={contact.phone}
              onChange={(e) => handleChange('phone', (e.target.value).toString())}
            />
          </div>

          <div>
            <label>
              <textarea
                name="comments"
                placeholder="Your message *"
                required
                value={contact.comments}
                onChange={(e) => handleChange('comments', (e.target.value).toString())}
              ></textarea>
            </label>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.submit}>
            <label>
              <input
                className={button.primary}
                type="submit"
                name="Submit"
                value={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
              />
            </label>
          </div>
        </>
        : <><h2>Success</h2>
          <p>Thank you for contacting us. We will be in touch with you shortly with your enquiry.</p></>
      }
    </form>
  )
}