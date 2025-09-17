"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    window.open(
      "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }

  return (
    <header className="w-full bg-black fixed top-0 left-0 z-50">
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo/logo_transparente.png"
            alt="Logo"
            className="h-12 w-auto"
          />
          <img
            src="/logo/logo-no-image.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Nav central (desktop) */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 -translate-x-1/2">
          <Link href="#about" className="text-amber-200 hover:text-[#f1bb3b]">
            Sobre
          </Link>
          <Link href="#relatos" className="text-amber-200 hover:text-[#f1bb3b]">
            Relatos
          </Link>
          <Link href="#resultados" className="text-amber-200 hover:text-[#f1bb3b]">
            Resultados
          </Link>
          <Link href="#planos" className="text-amber-200 hover:text-[#f1bb3b]">
            Planos
          </Link>
          <Link href="#duvidas" className="text-amber-200 hover:text-[#f1bb3b]">
            Dúvidas
          </Link>
          <Link href="#more" className="text-amber-200 hover:text-[#f1bb3b]">
            Contato
          </Link>
        </nav>

        {/* Direita: CTA (desktop) + Hambúrguer (mobile) */}
        <div className="flex items-center">
          {/* CTA desktop (oculto no mobile) */}
          <button
            onClick={handleClick}
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-amber-200 px-4 py-2 font-semibold text-amber-200 bg-transparent hover:text-[#eac56d] hover:border-[#eac56d] transition-colors"
          >
            <FaWhatsapp className="text-2xl" />
            Te espero no time
          </button>

          {/* Hambúrguer mobile */}
          <button
            className="md:hidden text-white ml-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg border-t">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link href="#about" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
            <Link href="#relatos" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Relatos
            </Link>
            <Link href="#resultados" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Resultados
            </Link>
            <Link href="#planos" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Planos
            </Link>
            <Link href="#duvidas" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Dúvidas
            </Link>
            <Link href="#more" className="text-amber-200 hover:text-[#f1bb3b]" onClick={() => setIsOpen(false)}>
              Contato
            </Link>
          </nav>

          {/* CTA dentro do drawer (mobile) */}
          <div className="px-4 pb-6">
            <button
              className="flex w-full items-center justify-center gap-2 bg-transparent border border-[#f1bb3b] text-[#f1bb3b] font-semibold py-3 rounded-md hover:opacity-80 transition-opacity"
              onClick={() => {
                handleClick();
                setIsOpen(false);
              }}
            >
              <FaWhatsapp className="text-2xl" />
              Te espero no time
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
