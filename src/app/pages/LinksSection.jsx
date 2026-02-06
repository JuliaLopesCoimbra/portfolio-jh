"use client";
import { FaYoutube, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function LinksSection() {
  const [visibleItems, setVisibleItems] = useState({
    leftBlock: false,
    rightBlock: false,
    socialIcons: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setVisibleItems(prev => ({ ...prev, leftBlock: true })), 100);
    const timer2 = setTimeout(() => setVisibleItems(prev => ({ ...prev, rightBlock: true })), 300);
    const timer3 = setTimeout(() => setVisibleItems(prev => ({ ...prev, socialIcons: true })), 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const linkEsquerda = "#";
  const linkDireita = "#";
  const linkYouTube = "https://www.youtube.com/@joaovictorherker";
  const linkInstagram = "https://www.instagram.com/joaoherker";
  const linkTikTok = "#";
  const linkWhatsApp = "https://wa.me/5516996931234?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.";

  return (
    <section className="relative bg-black text-neutral-100 pt-8 sm:pt-16 pb-40 sm:pb-64 px-6 overflow-hidden" style={{
      background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
    }}>
      {/* Brilho superior */}
      <div aria-hidden className="absolute inset-0 opacity-20 pointer-events-none" style={{
          background: "radial-gradient(circle at 40% 30%, rgba(242,175,19,0.12), transparent 60%)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Bloco Esquerda - BORDAS RESTAURADAS */}
          <a
            href={linkEsquerda}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-row items-center justify-between gap-3 sm:gap-6 rounded-2xl border border-amber-500 p-4 sm:p-8 min-h-40 sm:min-h-48 shadow-2xl transition hover:scale-[1.01] overflow-hidden fade-in-up ${visibleItems.leftBlock ? "visible" : ""}`}
            style={{
              backgroundImage: 'url(https://blog.supertechfitness.com.br/wp-content/webp-express/webp-images/uploads/2023/07/equipamentos-nacionais-academia-1024x683.jpeg.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/90 z-0" />
            <div className="flex h-20 w-20 sm:h-36 sm:w-36 items-center justify-center transition group-hover:scale-110 flex-shrink-0 relative z-10">
              <img src="/logo/logo_academy.png" alt="Logo Academy" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col items-end gap-2 relative z-10">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-right leading-tight">
                ACADEMY<br />PLATFORM
              </span>
              <button className="bg-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-xl md:text-2xl font-semibold uppercase transition hover:bg-amber-400">
                Saiba mais
              </button>
            </div>
          </a>

          {/* Bloco Direita - BORDAS RESTAURADAS */}
          <a
            href={linkDireita}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-row items-center justify-between gap-3 sm:gap-6 rounded-2xl border border-amber-500 p-4 sm:p-8 min-h-40 sm:min-h-48 shadow-2xl transition hover:scale-[1.01] overflow-hidden fade-in-up ${visibleItems.rightBlock ? "visible" : ""}`}
            style={{
              backgroundImage: 'url(https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2023/10/20160631/layout-para-academia-2048x1367.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/90 z-0" />
            <div className="flex h-20 w-20 sm:h-36 sm:w-36 items-center justify-center transition group-hover:scale-110 flex-shrink-0 relative z-10">
              <img src="/logo/logo_transparente.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col items-end gap-2 relative z-10">
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-right leading-tight">
               MINHA CONSULTORIA INDIVIDUAL 
              </span>
              <span className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold uppercase text-right leading-tight">
              FORMULARIO DE<br />PRÉ SELEÇÃO
              </span>
              
              <button className="bg-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-xl md:text-2xl font-semibold uppercase transition hover:bg-amber-400">
                Saiba mais
              </button>
            </div>
          </a>
        </div>

        {/* Ícones - Subi eles com mt-24 e mb-12 para dar espaço da sombra */}
        <div className={`relative z-20 flex justify-center items-center gap-6 sm:gap-10 mt-24 sm:mt-32  fade-in-up ${visibleItems.socialIcons ? "visible" : ""}`}>
          <a href={linkYouTube} target="_blank" className="text-amber-500 hover:text-amber-400 transition hover:scale-110">
            <FaYoutube className="text-5xl sm:text-6xl" />
          </a>
          <a href={linkInstagram} target="_blank" className="text-amber-500 hover:text-amber-400 transition hover:scale-110">
            <FaInstagram className="text-5xl sm:text-6xl" />
          </a>
          <a href={linkTikTok} target="_blank" className="text-amber-500 hover:text-amber-400 transition hover:scale-110">
            <FaTiktok className="text-5xl sm:text-6xl" />
          </a>
          <a href={linkWhatsApp} target="_blank" className="text-amber-500 hover:text-amber-400 transition hover:scale-110">
            <FaWhatsapp className="text-5xl sm:text-6xl" />
          </a>
        </div>
      </div>
      
      {/* Sombra de Rodapé - Reduzi para h-24 para não alcançar os ícones */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 100% at center bottom, rgba(242,175,19,0.3) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}