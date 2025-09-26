"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Video() {
  const [open, setOpen] = useState(false);

  function handleClickWhatsApp() {
    window.open(
      "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }

  return (
    <section
      className="relative text-white py-20 px-6"
      style={{
        background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
      }}
    >
      {/* fundo dourado sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(242,175,19,0.25), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-amber-500/90 drop-shadow mb-2">
          Conheça o acompanhamento
        </h2>
        <p className="text-neutral-300 mb-8">Assista ao vídeo</p>

        {/* Teaser */}
        <div
          className="relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-amber-500/30 cursor-pointer"
          style={{ aspectRatio: "9 / 16" }}
          onClick={() => setOpen(true)}
        >
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src="https://www.youtube.com/embed/o8SiHZzthbM?autoplay=1&mute=1&loop=1&playlist=o8SiHZzthbM&playsinline=1&modestbranding=1&controls=0&disablekb=1&iv_load_policy=3"
            title="YouTube teaser"
            frameBorder="0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        {/* Modal com player */}
       {open && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onClick={() => setOpen(false)}
  >
    <div
      className="relative w-full max-w-sm aspect-[9/16] rounded-xl overflow-hidden bg-black"
      onClick={(e) => e.stopPropagation()}
    >
      {/* <button
        onClick={() => setOpen(false)}
        className="absolute top-2 right-2 z-10 rounded-full  px-3 py-1 text-black text-sm"
      >
        ✕
      </button> */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/o8SiHZzthbM?autoplay=1&controls=1&modestbranding=1&rel=0"
        title="YouTube player"
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
)}


        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center justify-center gap-2 rounded-2xl border border-amber-400 bg-amber-400 text-black px-6 py-3 text-sm font-medium transition hover:bg-transparent hover:text-amber-500/90"
            onClick={handleClickWhatsApp}
          >
            <FaWhatsapp className="text-lg" />
            Fale comigo
          </button>
        </div>
      </div>
    </section>
  );
}
