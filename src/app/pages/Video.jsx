"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Video() {
  function handleClick() {
    window.open(
      "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }


  return (
    <section className="relative bg-black text-white py-20 px-6">
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-amber-300 drop-shadow mb-2">
          Conheça o acompanhamento
        </h2>
        <p className="text-neutral-300 mb-8">Assista ao vídeo</p>

        {/* vídeo responsivo */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30">
          <video
            className="w-full h-auto object-cover"
            src="/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center justify-center gap-2 rounded-2xl border border-amber-300 bg-amber-300 text-black px-6 py-3 text-sm font-medium transition hover:bg-transparent hover:text-amber-300"
            onClick={handleClick}
          >
            <FaWhatsapp className="text-lg" />
            Fale comigo
          </button>
        </div>
      </div>
    </section>
  );
}
