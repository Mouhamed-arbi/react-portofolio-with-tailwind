import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameRules = [v => !!v || 'Name is required'];
  const emailRules = [
    v => !!v || 'E-mail is required',
    v => /.+@+/.test(v) || 'E-mail must be valid',
  ];
  const messageRules = [v => !!v || 'Message is required'];

  const isFormValid = !!name && !!email;

  const sendEmail = () => {
    setLoading(true);

    emailjs
      .send(
        'service_pno2xfd',
        'template_ct9a0mc',
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'C6wIMZooGI-c6Wdeu'
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          setSuccess(true);
          setName('Name sent successfully');
          setEmail('Email sent successfully');
          setMessage('Message sent successfully');
        },
        err => {
          console.log('FAILED...', err);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" style={{ backgroundColor: 'var(--main-bg-color)' }}>
      <div className="contact pa-2">
        <div className="container">
          <div className="row py-8">
            <div className="col info-text">
              <h2>
                Let's
                <i className="mdi mdi-arrow-right"></i>
              </h2>
              <h2>Connect</h2>
              <p>
                As a full stack JS developer with a background in marketing, I bring a unique
                perspective and set of skills to every project. With over 6 years of experience in
                various marketing fields, including digital marketing, SEO, and content creation, I
                understand how to build web applications that not only function flawlessly but also
                effectively reach and engage target audiences. From designing visually appealing
                user interfaces to developing robust backend solutions, I am passionate about
                creating applications that meet the needs of both users and businesses. If you're
                looking for a full stack JS developer with a marketing edge, let's connect and
                bring your project to the next level.
              </p>
              <p className="email">Email: mouhamedarbimousssi@gmail.com</p>
            </div>
            <div className="col form">
              <form>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="text-field montserrat my-8"
                  placeholder="name"
                />
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="text-field montserrat my-8"
                  placeholder="email"
                />
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  style={{ backgroundColor: '#CCCCCC' }}
                  className="message-field montserrat my-8"
                  placeholder="message"
                ></textarea>
                <div>
                  <button
                    type="button"
                    onClick={sendEmail}
                    disabled={!isFormValid}
                    className="montserrat btn my-8"
                    style={{ fontWeight: 'bold' }}
                  >
                    {success ? 'Sent!' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
