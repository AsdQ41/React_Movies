function Footer() {
  return (
    <footer className="page-footer deep-purple lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/AsdQ41/React_Movies"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
