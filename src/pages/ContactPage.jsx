import { Button } from "react-bootstrap";

function ContactPage() {
  const resumeUrl = "/documents/01-cv-mark-mottian-june-2026-draft-02.pdf";

  return (
    <main>
      <section className="content-card">
        <p className="section-eyebrow">Contact</p>

        <h1 className="page-title">Let&apos;s connect</h1>

        <p className="page-lead">
          I am looking for junior MERN stack and full-stack developer
          opportunities where I can build practical web applications and keep
          growing as a developer.
        </p>

        <p className="contact-email-line">
          Email:{" "}
          <a href="mailto:mark.mottian@gmail.com">mark.mottian@gmail.com</a>
        </p>

        <div className="contact-action-grid">
          <Button
            href="mailto:mark.mottian@gmail.com"
            variant="primary"
            className="contact-action"
          >
            Email
          </Button>

          <Button
            href="https://github.com/Mark-Mottian"
            target="_blank"
            rel="noreferrer"
            variant="outline-dark"
            className="contact-action"
          >
            GitHub
          </Button>

          <Button
            href="https://www.linkedin.com/in/mark-mottian"
            target="_blank"
            rel="noreferrer"
            variant="outline-primary"
            className="contact-action"
          >
            LinkedIn
          </Button>

          <Button
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline-primary"
            className="contact-action"
          >
            Resume
          </Button>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;