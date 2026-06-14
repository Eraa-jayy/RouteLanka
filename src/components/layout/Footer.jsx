import { Link } from 'react-router-dom';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span
              className="text-[#9F0712] font-serif text-4xl sm:text-5xl font-bold mb-4 block"
            >
              RouteLanka
            </span>
            <p className="text-slate-400 text-sm leading-7 max-w-md">
              Helping transport companies streamline operations, monitor fleets in real time, optimize routes,
              reduce costs, and make smarter business decisions.
            </p>
          </div>

          <div className="flex flex-col items-end text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row sm:text-left">
            <p>© {year} RouteLanka. All rights reserved.</p>
            <p>Smart Transport. Stronger Business.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
