import { FaWhatsapp, FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-neutral-300 pt-16 pb-8 px-6">
      {/* brilho dourado sutil no topo */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Logo */}
        <div>
          <div  className="flex items-center">
                    <img
                        src="/logo/logo_transparente.png"
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                    <img 
                    src="/logo/logo-no-image.png"
                     alt="Logo"
                        className="h-12 w-auto"/>
                </div>
          <p className="mt-3 text-sm text-neutral-400">
            Consultoria personalizada com João Herker. Performance e saúde
            alinhadas à sua realidade.
          </p>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col gap-2 text-sm text-neutral-300">
          <a href="#about" className="hover:text-amber-300 transition">
            Sobre
          </a>
          <a href="#relatos" className="hover:text-amber-300 transition">
            Relatos
          </a>
          <a href="#resultados" className="hover:text-amber-300 transition">
            Resultados
          </a>
          <a href="#planos" className="hover:text-amber-300 transition">
            Planos
          </a>
          <a href="#duvidas" className="hover:text-amber-300 transition">
            Dúvidas
          </a>
          <a href="#more" className="hover:text-amber-300 transition">
            Mais
          </a>
        </nav>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-white">Contato</h4>
          <a
            href="https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria."
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
          <a
            href="mailto:joaovictorherker@gmail.com"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaEnvelope className="text-lg" />
            E-mail
          </a>
          <a
            href="https://www.instagram.com/joaoherker"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaInstagram className="text-lg" />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@joaovictorherker"
            target="_blank"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaYoutube className="text-lg" />
            YouTube Channel
          </a>
        </div>
      </div>

      {/* direitos autorais */}
      <div className="relative z-10 mt-12 text-center text-xs text-neutral-500">
        <p>
          &copy; {new Date().getFullYear()} João Herker — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
