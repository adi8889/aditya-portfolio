import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Profile', href: '#profile' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interests', href: '#interests' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        <div className="text-xl font-bold">MyPortfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="hover:text-white transition duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-300">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="block py-1 hover:text-white" onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
