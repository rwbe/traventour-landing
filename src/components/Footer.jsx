import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="my-8">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-6">
          {/* Logo e Descrição */}
          <div className="col-span-3">
            <img
              src="/footer/Logo.png"
              alt="Ícone da Traventour"
              className="w-44 h-auto mb-4"
            />
            <p className="mt-4 text-sm leading-6">
              Traventour é um serviço de site ou aplicativo que ajuda você a selecionar ou recomendar lugares conhecidos como &quot;joias escondidas&quot; para serem mais conhecidos e visitados.{" "}
              <Link to="/" className="font-semibold text-blue-600">
                Leia Mais
              </Link>
            </p>

            {/* Botões de Redes Sociais */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
               <BsTwitterX size={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          {/* Links de Navegação */}
          <div className="col-span-1">
            <NavigationLinks title="Sobre" links={aboutLinks} />
          </div>
          <div className="col-span-1">
            <NavigationLinks title="Suporte" links={supportLinks} />
          </div>
          <div className="col-span-1">
            <NavigationLinks title="FAQ" links={faqLinks} />
          </div>
        </div>
      </div>
      {/* Direitos Autorais e Links Adicionais */}
      <div className="container mt-8">
        <Copyright />
      </div>
    </footer>
  );
}

// Componente para renderizar links de navegação
function NavigationLinks({ title, links }) {
  return (
    <div>
      <h6 className="mb-4 font-bold">{title}</h6>
      <ul className="leading-8">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Links de Navegação
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
  { to: "/", label: "Central de Atendimento" },
];

const faqLinks = [
  { to: "/", label: "Conta" },
  { to: "/", label: "Organização" },
  { to: "/", label: "Pedido" },
  { to: "/", label: "Pagamento" },
  { to: "/", label: "Devoluções" },
  { to: "/", label: "Direitos Autorais" },
];

// Componente para renderizar direitos autorais
function Copyright() {
  return (
    <p className="mb-4 text-sm sm:mb-0">© 2024 • Todos os Direitos Reservados</p>
  );
}


export default Footer;
