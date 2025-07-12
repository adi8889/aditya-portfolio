const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-20">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} Aditya H. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  