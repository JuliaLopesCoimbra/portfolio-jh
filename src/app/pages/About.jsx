"use client";

export default function About() {
  return (
    <section id="about" className="relative  text-neutral-100 py-20 px-6" style={{
    background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
  }}>
      {/* brilho sutil dourado */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(242,175,19,0.15), transparent 55%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero texto */}
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Cansado(a) de não conseguir{" "}
            <span className="text-amber-500/90">seguir a dieta</span> que te passaram?
          </h2>
          <p className="mt-4 text-neutral-300">
            Pare de se culpar: o problema nunca foi você!
Protocolos genéricos e difíceis de seguir só atrapalham sua evolução.

          </p>
          <p className="mt-4 text-neutral-300">
            Na consultoria, você recebe um plano personalizado, prático e eficiente, que se adapta ao seu dia a dia. Assim, fica mais fácil ganhar massa, perder gordura, melhorar performance e alcançar seus objetivos sem abrir mão do bem-estar.
          </p>
        </header>

        {/* divisor */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        {/* Diferencial */}
        <section className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-medium">
            <span className="text-amber-500/90">Qual é o meu diferencial?</span>
          </h3>
          <p className="text-neutral-300">
            Personalização real, revisão constante e ferramentas que aumentam sua independência.
          </p>
        </section>

        {/* Etapas */}
        <section className="mt-10 space-y-16">
          {/* 1 - Anamnese */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-sm sm:text-base tracking-wide text-amber-500/90">
  1 — Anamnese Online + Fotos
</div>

              <h4 className="mt-3 text-lg font-semibold">Tudo começa entendendo você</h4>
              <p className="mt-3 text-neutral-300">
                ✅ Pagamento confirmado → acesso imediato ao questionário<br></br>
                ✅ Rotina, treino, sono e preferências → tudo levado em conta<br></br>
                ✅ Fotos do físico → para análise completa <br></br>
                🔥 Personalização de verdade começa aqui!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/consultoria/consultoria01.png" alt="Anamnese" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              <img src="/consultoria/consultoria02.png" alt="Anamnese 2" className="rounded-xl border border-amber-500/30 shadow-2xl" />
            </div>
          </article>

          {/* 2 - Montagem do protocolo */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div className="order-2 md:order-1 md:col-span-1 col-span-2">
              <img
                src="/consultoria/consultoria03.png"
                alt="Plano no WebDiet"
                className="w-full h-auto rounded-xl  shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-sm sm:text-base tracking-wide text-amber-500/90">
                2 — Montagem do seu protocolo
              </div>
              <h4 className="mt-3 text-lg font-semibold">Plano do zero, para sua realidade</h4>
              <p className="mt-3 text-neutral-300">
                Nada de copiar e colar: em até 3 dias úteis você recebe um protocolo 100% personalizado, com foco em resultados e aderência.
                <br></br>
                📲 Tudo pelo app WebDiet, com listas de substituições para manter variedade e praticidade.
              </p>
            </div>
          </article>


          {/* 3 - Revisão semanal */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-sm sm:text-base tracking-wide text-amber-500/90">
                3 — Revisão semanal
              </div>
              <h4 className="mt-3 text-lg font-semibold">Acompanhamento de verdade</h4>
              <p className="mt-3 text-neutral-300">
                <b>Se tem uma coisa que eu ODEIO é:</b><br></br><br></br>
                Profissional que larga você e volta apenas no retorno!
                <br></br>
                Toda semana os planos são revisados e ajustados conforme sua evolução, rotina e desafios do dia a dia
                <br></br>

                🔄 Estratégia contínua para manter você sempre no caminho dos melhores resultados.

              </p>
            </div>
           
          </article>

          {/* Evolução */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div className="order-1 md:order-1">
              <img src="/consultoria/consultoria06.jpeg" alt="Acompanhamento da evolução" className="rounded-xl border border-amber-500/30 shadow-2xl w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {/* <img src="/consultoria/consultoria04.jpeg" alt="Revisão semanal" className="rounded-xl border border-amber-500/30 shadow-2xl" /> */}
              <img src="/consultoria/consultoria05.jpeg" alt="Revisão semanal 2" className=" w-2/4 mx-auto rounded-xl border border-amber-500/30 shadow-2xl" />
                
            </div>
            
          </article>

          {/* 4 - Calculadora de substituições */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-sm sm:text-base tracking-wide text-amber-500/90">
                4 — Calculadora de substituições
              </div>
              <h4 className="mt-3 text-lg font-semibold">Flexibilidade com inteligência</h4>
              <p className="mt-3 text-neutral-300">
                Todos na consultoria têm acesso à calculadora de substituições: mais independência,
                flexibilidade e criatividade na dieta — sem sair da estratégia.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <img src="/consultoria/consultoria07.jpeg" alt="Calculadora 1" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              {/* <img src="/consultoria/consultoria08.jpeg" alt="Calculadora 2" className="rounded-xl border border-amber-500/30 shadow-2xl" /> */}
              <img src="/consultoria/consultoria09.jpeg" alt="Calculadora 3" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              {/* <img src="/consultoria/consultoria10.jpeg" alt="Calculadora 4" className="rounded-xl border border-amber-500/30 shadow-2xl" /> */}
            </div>
                          <p className="text-amber-500/90">🔓 Antes mesmo de você fechar a consultoria, já estou te entregando uma vantagem exclusiva: acesso à calculadora inteligente para usar no seu dia a dia.</p>

            <a
              href="https://quantocomer.com.br/joao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:scale-105 hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              🚀 Testar Calculadora Agora
            </a>
          </article>
        </section>

        {/* callout final */}
        <div className="mt-16 rounded-2xl border border-amber-500/30 bg-neutral-900/40 p-6">
          <p className="text-center text-neutral-200">
            Com orientação adequada, você maximiza o progresso e alcança seus objetivos de forma
            eficaz e sustentável.
          </p>
        </div>
      </div>
    </section>
  );
}
