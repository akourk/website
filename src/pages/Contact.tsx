import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Get in touch with Alex Kourkoumelis by email, LinkedIn, or GitHub."
  >
    <article className="page" id="contact">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Contact</h1>
        <p className="page__standfirst">
          The fastest way to reach me is email. I read everything.
        </p>
      </header>
      <p className="contact__email">
        <a href="mailto:akourk@icloud.com">akourk@icloud.com</a>
      </p>
      <ContactIcons className="contact__social" />
    </article>
  </Main>
);

export default Contact;
