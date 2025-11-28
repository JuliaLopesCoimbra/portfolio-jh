"use client";

import { useState } from "react";

export default function Planos() {
  const [periodo, setPeriodo] = useState("Mensal");

  const planos = [
    {
      titulo: "Consultoria Essencial",
      descricao:
        "Plano individualizado com foco em objetivos específicos. Ideal para quem busca direcionamento claro e prático.",
    },
  ];

  const inclusoesPorPeriodo = {
    Mensal: [
      "Respostas em 24h",
      "Ebook de Ciclo de Carboidratos",
      "Ebook de Higiene de Sono",
      "Calculadora de substituições de alimentos",
      "Check-ins semanais",
      "Recomendações gerais treino",
    ],
    Trimestral: [
      "PLANO COM 5% DE DESCONTO",
      "Respostas em 24h",
      "Ebook de Ciclo de Carboidratos",
      "Ebook de Higiene de Sono",
      "Calculadora de substituições de alimentos",
      "Check-ins semanais",
      "Recomendações gerais treino",
    ],
    Semestral: [
      "ACESSO AO PLANO MENSAL DA MUSCLE CLUB",
      "PLANO COM 7% DE DESCONTO",
      "Respostas em 24h",
      "Ebook de Ciclo de Carboidratos",
      "Ebook de Higiene de Sono",
      "Calculadora de substituições de alimentos",
      "Check-ins semanais",
      "Recomendações gerais treino",
    ],
  };

  const periodos = ["Mensal", "Trimestral", "Semestral"];

  function waLink(planoTitulo) {
  const phone = "5516996931234"; 
  const text = `Estou interessado na sua consultoria e queria saber mais sobre o ${planoTitulo} – período ${periodo}. Poderia me enviar os preços e condições?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

 

  return (
    <section className="relative bg-black text-neutral-100 py-20 px-6 " style={{
    background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
  }}>
      {/* brilho dourado */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, rgba(242,175,19,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Planos <span className="text-amber-500/90">e Ofertas</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            Escolha o formato que mais combina com seus objetivos. Todos os planos incluem
            acompanhamento de perto e personalização real.
          </p>
        </header>

        {/* seletor de período */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {periodos.map((p) => (
            <button
              key={p}
              onClick={() => setPeriodo(p)}
              className={
                "rounded-xl px-4 py-2 text-sm border transition " +
                (periodo === p
                  ? "border-amber-400 bg-amber-400 text-black shadow"
                  : "border-amber-500/30 bg-neutral-900/40 text-neutral-200 hover:border-amber-400/40")
              }
            >
              {p}
            </button>
          ))}
        </div>

        {/* divisor */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        {/* layout com fotos + planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* foto esquerda */}
          <div className="hidden md:block">
            <img
              src="/jh/joao7.jpg"
              alt="Foto 1"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* planos */}
          <div>
            {planos.map((plano, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-amber-500/30 bg-neutral-900/40 p-6 shadow-2xl transition hover:border-amber-400/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-amber-500/90">
                    {plano.titulo}
                  </h3>
                  <span className="rounded-full border border-amber-300/40 bg-black/40 px-3 py-1 text-xs text-amber-200">
                    {periodo}
                  </span>
                </div>

                <p className="mt-3 text-sm text-neutral-300">{plano.descricao}</p>

               <ul className="mt-4 space-y-2 text-sm text-neutral-200">
  {inclusoesPorPeriodo[periodo].map((b, j) => {
    const destaque =
      b === "PLANO COM 5% DE DESCONTO" ||
      b === "ACESSO AO PLANO MENSAL DA MUSCLE CLUB" 
      ||
      b === "PLANO COM 7% DE DESCONTO";

    return (
      <li
        key={j}
        className={`flex items-start gap-2 ${
          destaque ? "text-amber-500/90 font-semibold" : ""
        }`}
      >
        <span
          className={`h-2 w-2 mt-1 rounded-full ${
            destaque ? "bg-amber-300" : "bg-amber-400"
          }`}
        />
        {b}
      </li>
    );
  })}
</ul>


                <div className="mt-6">
                  <a
                    href={waLink(plano.titulo)}
                    target="_blank"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400 bg-amber-400 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-transparent hover:text-amber-500/90"
                  >
                    Quero saber sobre este plano
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* foto direita */}
          <div className="hidden md:block">
            <img
              src="/jh/pose.jpeg"
              alt="Foto 2"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* CTA geral */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-300">
            Todos os planos podem ser parcelados em até{" "}
            <span className="font-semibold text-amber-500/90">12x</span> (com juros).
          </p>
        </div>
      </div>
    </section>
  );
}
