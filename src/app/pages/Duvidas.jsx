"use client";
import { useState } from "react";

export default function Duvidas() {
  const faqs = [
    {
      pergunta: "Como funciona o acompanhamento nutricional?",
      resposta:
        "Você responde uma anamnese detalhada, recebe seu protocolo personalizado e toda semana ajustamos juntos conforme sua evolução e necessidades.",
    },
    {
      pergunta: "Preciso de algum aplicativo para acompanhar a dieta?",
      resposta:
        "Sim, você terá acesso ao WebDiet, onde encontra seu plano, listas de substituições e acompanha sua evolução de forma prática.",
    },
    {
      pergunta: "Em quanto tempo começo a ver resultados?",
      resposta:
        "Cada pessoa responde de forma diferente, mas geralmente nas primeiras semanas já percebemos mudanças em energia, performance e composição corporal.",
    },
    {
      pergunta: "O atendimento é só para atletas?",
      resposta:
        "Não! O acompanhamento é para qualquer pessoa que queira melhorar a saúde, performance, estética ou hábitos alimentares.",
    },
    {
      pergunta: "Como faço para saber os preços?",
      resposta:
        "Basta clicar no botão 'Fale comigo' ou acessar a seção Planos para entrar em contato diretamente pelo WhatsApp.",
    },
  ];

  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section id="duvidas" className="relative bg-black text-neutral-100 py-20 px-6">
      {/* brilho dourado sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 60%, rgba(242,175,19,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Dúvidas <span className="text-amber-300">Frequentes</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            Separamos algumas perguntas comuns para te ajudar a entender melhor como funciona o
            acompanhamento.
          </p>
        </header>

        {/* accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-amber-500/30 bg-neutral-900/40 shadow-2xl"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-white">{faq.pergunta}</span>
                <span className="text-amber-300">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-neutral-300">{faq.resposta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
