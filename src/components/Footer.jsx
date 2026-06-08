function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Mark Mottian</p>

      <div>
        <a href="mailto:mark.mottian@gmail.com">Email</a>
        <a
          href="https://github.com/Mark-Mottian"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;