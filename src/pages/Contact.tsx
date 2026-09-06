import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    fullPage
    title="Contact"
    description="Get in touch with Alex Kourkoumelis by email, LinkedIn, or GitHub."
  >
    <article className="page" id="contact">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Contact</h1>
        <p className="page__standfirst">
          Have a question about my work, or something you think I’d enjoy building?
        </p>
      </header>
      <p>Email is the best way to reach me.</p>
      <p className="contact__email">
        <a href="mailto:akourk@icloud.com">akourk@icloud.com</a>
      </p>
      <ContactIcons className="contact__social" showLabels />
    </article>
  </Main>
);

export default Contact;
