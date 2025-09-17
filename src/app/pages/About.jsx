"use client";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-neutral-100 py-20 px-6">
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
            <span className="text-amber-300">seguir a dieta</span> que te passaram?
          </h2>
          <p className="mt-4 text-neutral-300">
            Talvez o problema nunca tenha sido você! Os protocolos que te entregaram eram
            genéricos, difíceis de seguir e distantes da sua realidade.
          </p>
          <p className="mt-4 text-neutral-300">
            A consultoria visa auxiliar você a alcançar seus objetivos de maneira eficaz e
            inteligente, preservando seu bem-estar ao longo do processo. Alimentação alinhada às
            suas metas é fundamental para ganhar massa, perder gordura, aprimorar performance e
            manter uma vida saudável.
          </p>
        </header>

        {/* divisor */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        {/* Diferencial */}
        <section className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-medium">
            <span className="text-amber-300">Qual é o meu diferencial?</span>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs tracking-wide text-amber-300">
                1 — Anamnese Online + Fotos
              </div>
              <h4 className="mt-3 text-lg font-semibold">Tudo começa entendendo você</h4>
              <p className="mt-3 text-neutral-300">
                Assim que o pagamento é confirmado, você recebe um questionário completo para
                descrever rotina, treino, sono, preferências alimentares, horários e contexto
                socioeconômico. Também pedimos fotos do físico. A partir dessas informações, a
                personalização de fato começa.
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
                className="w-full h-auto rounded-xl border border-amber-500/30 shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs tracking-wide text-amber-300">
                2 — Montagem do seu protocolo
              </div>
              <h4 className="mt-3 text-lg font-semibold">Plano do zero, para sua realidade</h4>
              <p className="mt-3 text-neutral-300">
                Com base no seu objetivo e respostas, seu plano é desenvolvido do zero —
                nada de copiar e colar. Em até 3 dias úteis você recebe o protocolo com foco
                em resultados e aderência. Você acessa tudo pelo app do WebDiet, com listas
                de substituições para evitar monotonia.
              </p>
            </div>
          </article>


          {/* 3 - Revisão semanal */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs tracking-wide text-amber-300">
                3 — Revisão semanal
              </div>
              <h4 className="mt-3 text-lg font-semibold">Acompanhamento de verdade</h4>
              <p className="mt-3 text-neutral-300">
                <b>Se tem uma coisa que eu ODEIO é:</b><br></br><br></br>
                Criar um plano e simplesmente largar você.

                O plano não fica parado. Ajustes semanais são feitos conforme sua evolução,
                dificuldades ou mudanças na rotina. Tudo para potencializar resultados com
                estratégia.Toda semana seu protocolo será revisado. Os ajustes serão realizados sempre
                que necessário — seja por alguma dificuldade que você relatar (como
                mudanças na rotina ou desafios na adesão), seja por decisões estratégicas que
                adotarmos para potencializar seus resultados.

              </p>
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-lg font-semibold mt-7">Sua evolução acompanhada</h4>
              <p className="mt-3 text-neutral-300">
                Observamos, medimos e ajustamos para acertar cada vez mais. Você sempre sabe onde
                está e qual o próximo passo.
              </p>
            </div>
          </article>

          {/* Evolução */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div className="order-2 md:order-1">
              <img src="/consultoria/consultoria06.jpeg" alt="Acompanhamento da evolução" className="rounded-xl border border-amber-500/30 shadow-2xl w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/consultoria/consultoria04.jpeg" alt="Revisão semanal" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              <img src="/consultoria/consultoria05.jpeg" alt="Revisão semanal 2" className="rounded-xl border border-amber-500/30 shadow-2xl" />
                
            </div>
            
          </article>

          {/* 4 - Calculadora de substituições */}
          <article className="grid gap-6 md:grid-cols-2 md:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs tracking-wide text-amber-300">
                4 — Calculadora de substituições
              </div>
              <h4 className="mt-3 text-lg font-semibold">Flexibilidade com inteligência</h4>
              <p className="mt-3 text-neutral-300">
                Todos na consultoria têm acesso à calculadora de substituições: mais independência,
                flexibilidade e criatividade na dieta — sem sair da estratégia.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <img src="/consultoria/consultoria07.jpeg" alt="Calculadora 1" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              <img src="/consultoria/consultoria08.jpeg" alt="Calculadora 2" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              <img src="/consultoria/consultoria09.jpeg" alt="Calculadora 3" className="rounded-xl border border-amber-500/30 shadow-2xl" />
              <img src="/consultoria/consultoria10.jpeg" alt="Calculadora 4" className="rounded-xl border border-amber-500/30 shadow-2xl" />
            </div>
            <a
              href="https://quantocomer.com.br/joao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-amber-300 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:scale-105 hover:shadow-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
