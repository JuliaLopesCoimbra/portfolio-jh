"use client";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function More() {
  const beneficios = [
    "Protocolos totalmente personalizados — nada de copiar e colar",
    "Revisões semanais com ajustes estratégicos",
    "Suporte pelo WhatsApp, com retorno em até 24h",
    "Avaliação minuciosa da sua rotina, preferências e limitações",
    "Adaptação real à sua vida — sem sofrimento desnecessário",
  ];
  function handleClick() {
    window.open(
      "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }

  return (
    <section id="more" className="relative bg-black text-neutral-100 py-20 px-6">
      {/* fundo dourado sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(242,175,19,0.12), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Comunicação direta com{" "}
          <span className="text-amber-300">João Herker</span>
        </h2>

        {/* lista de benefícios */}
        <ul className="mt-10 space-y-4 text-left">
          {beneficios.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckCircle className="mt-1 text-amber-400" />
              <span className="text-neutral-300">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12">
          <a
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-300 bg-amber-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-amber-300"
          >
            <FaWhatsapp className="text-lg" />
            Fale comigo agora
          </a>
        </div>
      </div>
    </section>
  );
}
