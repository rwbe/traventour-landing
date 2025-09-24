import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <img
              src="/footer/Logo.png"
              alt="Ícone da Traventour"
              className="w-36 sm:w-44 h-auto"
            />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Traventour é um serviço que ajuda você a descobrir lugares únicos e "joias escondidas" para tornar suas viagens inesquecíveis.
            </p>

            {/* Social media */}
            <div className="space-y-4">
              <h6 className="font-semibold text-gray-800 text-sm sm:text-base uppercase tracking-wide">
                Siga-nos
              </h6>
              <div className="flex gap-3 flex-wrap justify-start sm:justify-start">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-blue-600 hover:text-blue-800 hover:shadow-md transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-pink-600 hover:text-pink-800 hover:shadow-md transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:text-gray-900 hover:shadow-md transition-all duration-200"
                  aria-label="X (Twitter)"
                >
                  <BsTwitterX size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-red-600 hover:text-red-800 hover:shadow-md transition-all duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-start-4">
            <NavigationLinks title="Sobre" links={aboutLinks} />
          </div>
          <div>
            <NavigationLinks title="Suporte" links={supportLinks} />
          </div>
          <div>
            <NavigationLinks title="FAQ" links={faqLinks} />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <Copyright />
      </div>
    </footer>
  );
}

// Component for rendering navigation links
function NavigationLinks({ title, links }) {
  return (
    <div className="space-y-4">
      <h6 className="font-semibold text-gray-800 text-sm sm:text-base uppercase tracking-wide">{title}</h6>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Link data
const aboutLinks = [
  { to: "/", label: "Sobre Nós" },
  { to: "/", label: "Blog" },
  { to: "/", label: "Carreiras" },
  { to: "/", label: "Empregos" },
  { to: "/", label: "Notícias" },
  { to: "/", label: "Galeria" },
];

const supportLinks = [
  { to: "/", label: "Fale Conosco" },
  { to: "/", label: "Chat Online" },
  { to: "/", label: "WhatsApp" },
  { to: "/", label: "Telegram" },
  { to: "/", label: "Tickets" },
  { to: "/", label: "Central" },
];

const faqLinks = [
  { to: "/", label: "Conta" },
  { to: "/", label: "Organização" },
  { to: "/", label: "Pedido" },
  { to: "/", label: "Pagamento" },
  { to: "/", label: "Devoluções" },
  { to: "/", label: "Direitos Autorais" },
];

// Copyright component
function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t border-gray-200 pt-4 sm:pt-6">
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          © {currentYear} Traventour. Todos os Direitos Reservados
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
            Política de Privacidade
          </Link>
          <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
            Termos de Uso
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
