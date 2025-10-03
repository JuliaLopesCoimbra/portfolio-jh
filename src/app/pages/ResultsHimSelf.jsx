"use client";

import { FaDrumstickBite, FaDumbbell } from "react-icons/fa";
import { Dumbbell, Users, Flame, HeartPulse } from "lucide-react";

 const items = [
    {
      title: "Recomposição corporal",
      subtitle: "Equilibre massa magra e gordura corporal de forma saudável.",
      icon: Dumbbell,
    },
    {
      title: "Para atletas e não atletas",
      subtitle: "Planos adaptados ao seu nível de prática, do iniciante ao avançado.",
      icon: Users,
    },
    {
      title: "Emagrecimento e definição",
      subtitle: "Estratégias eficazes para reduzir gordura e ganhar contornos.",
      icon: Flame,
    },
    {
      title: "Hipertrofia e qualidade de vida",
      subtitle: "Cresça em massa muscular sem abrir mão do bem-estar.",
      icon: HeartPulse,
    },
  ];
export default function AcompanhamentoSection({
  
  images = [
    "/jh/joao1.jpg",
    "/jh/joao2.jpg",
    "/jh/joao3.jpg",
    "/jh/pose.jpeg",
    "/jh/joao5.jpg",
  ],
},) {
  return (
    <section className="relative text-neutral-100 py-16 px-6">
      {/* brilho sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(242,175,19,0.10), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        {/* TEXTOS — ESQUERDA */}
      <div className="max-w-xl">
      <p className="uppercase tracking-widest text-amber-500/90 text-xs mb-2">
        Dentro do Acompanhamento
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white">
        Eu posso te ajudar
      </h2>

      <div className="relative mt-6">
        <ul className="space-y-8">
          {items.map(({ title, subtitle, icon: Icon }, idx) => (
            <li key={idx} className="relative flex gap-4">
              {/* Linha vertical cinza (não aparece no último item) */}
              {idx !== items.length - 1 && (
                <span className="absolute left-5 top-8 h-full w-px bg-neutral-700"></span>
              )}

              {/* Ícone */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                <Icon className="h-5 w-5 text-amber-400" />
              </div>

              {/* Textos */}
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed mt-1">
                  {subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <a
          href="https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20acompanhamento."
          target="_blank"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400 bg-amber-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-amber-500/90"
        >
          Falar sobre o acompanhamento
        </a>
      </div>
    </div>

        {/* FOTOS — DIREITA */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border border-amber-500/20 bg-neutral-900/40 shadow-xl ${
                i % 5 === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Acompanhamento ${i + 1}`}
                loading="lazy"
                className={`h-full w-full object-cover aspect-[4/5] md:aspect-[3/4] transition-transform duration-500 hover:scale-105
                  ${src === "/jh/pose.jpeg" ? "object-top" : ""}
                  ${src === "/jh/joao5.jpg" ? "object-[center_30%]" : ""}
                  ${src === "/jh/joao3.jpg" ? "object-[center_30%]" : ""}`}
              />

        {/* BADGE - Já fui obeso */}
{src === "/jh/joao1.jpg" && (
  <div className="absolute z-10 left-[5%] top-[90%] -translate-y-1/2 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-500/20 backdrop-blur px-3 py-1.5 shadow-xl">
    <FaDrumstickBite className="text-amber-400 text-sm sm:text-base" />
    <span className="text-xs sm:text-sm text-white font-medium">
      Já fui obeso
    </span>
  </div>
)}

{/* BADGE - Já fui falso magro */}
{src === "/jh/joao2.jpg" && (
  <div
  className="
    absolute z-10 right-[10%]
    bottom-[85%] sm:bottom-[90%]   /* mobile = 80%, desktop = 90% */
    flex items-center gap-2 
    rounded-lg sm:rounded-xl        /* badge menor no celular */
    border border-amber-400/40 
    bg-amber-500/20 backdrop-blur 
    px-2 py-1 sm:px-3 sm:py-1.5     /* padding menor no celular */
    shadow-xl
  "
>
   <FaDumbbell className="text-amber-400 text-xs sm:text-sm" />
  <span className="text-[10px] sm:text-xs text-white font-medium">
    Já fui falso magro
  </span>
</div>

)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
