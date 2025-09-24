"use client";

export default function Relatos() {
  const relatos = [
    {
      nome: "PEUZZIN",
      titulo: "Maratonista amadora",
      foto: "/relatos/relato01.jpg",
      depoimento:
        "Irmão, não consigo nem expressar o que a sua consultoria representa pra mim. De verdade, é muito além de uma dieta. É acompanhamento completo, é convivência, é informação, é todo o seu esforço e dedicação nos estudos pra sempre me entregar o melhor. É algo totalmente fora da caixa. Dá pra ver o quanto você zela pela sua profissão com amor e seriedade. Seu acompanhamento diário é foda, sua dieta é FODA e super funcional! Você é incrível. ❤️",
    },
    {
      nome: "João Pedro Cassis",
      titulo: "Hipertrofia | 12 semanas",
      foto: "/relatos/relato02.png",
      depoimento:
        "A consultoria me mostrou uma nossa visão sobre a nutrição. Trouxe muito conhecimento acompanhado de atenção e cuidado com o planejamento direcionado para o meu objetivo. O modelo on-line com os questionários e revisões semanais deixa tudo mais fácil de acompanhar e entender onde estou acertando e errando no planejamento. Sem dúvidas o melhor modelo de consultoria que já experimentei!",
    },
    {
      nome: "Henrico Fescina Galdino",
      foto: "/relatos/relato03.png",
      titulo: "Cross training",
      depoimento:
        "Vamos lá! Por mais que a consultoria seja à distância, além de meu nutricionista, você se tornou um amigo, sou seu fã! Aprendi que fazer dieta vai muito além de ganhar ou perder peso. Não é viver em uma bolha e se privar de tudo o que gostamos. Podemos, e devemos, fazer o que gostamos sem estresse ou peso na consciência. Indicaria para qualquer pessoa de olhos fechados. Sou muito fã do seu trabalho!",
    },
    {
      nome: "Rennan Santos",
      foto: "/relatos/relato04.png",
      titulo: "Perda de gordura",
      depoimento:
        "Boa noite João, passando aqui pra falar que essa consultoria on-line foi além das minhas expectativas, o suporte é excelente, chega a ser mais próxima do que presencial, o que mais estou gostando é que vc deixa a pessoal super confortável com as nossas mudanças de rotina, como vc falou “o nutricionista que tem que se adequar a rotina do aluno” e é isso que sinto, vc sempre consegue adequar a dieta pra minha rotina, e olha que sempre está mudando kk, mas é isso João, só agradecer por sua dedicação em deixar tudo mais fácil pra nós pacientes 🎤🤝🏾",
    },
    {
      nome: "Lucas Spadone",
      foto: "/relatos/relato05.png",
      titulo: "Recomposição corporal",
      depoimento:
        "João, seu atendimento é simplesmente perfeito! Sempre consegue adaptar a dieta de acordo com a minha rotina manipulando a quantidade de refeições para que eu consiga seguir o planejamento sem dificuldades! Dos profissionais que eu já passei, com certeza é o melhor!",
    },
    {
      nome: "Renan Rambul",
      foto: "/relatos/relato06.png",
      titulo: "Triathlon",
      depoimento:
        "A consultoria atendeu a todas as minhas expectativas. O João conseguiu montar uma dieta que se adequou à minha rotina e foi flexível sempre que precisei fazer alguma mudança. Conseguimos ver resultados rápidos em poucos meses, mantendo uma dieta saborosa e palatável.",
    },
     {
      nome: "Gabriel Pessoni",
      foto: "/relatos/relato07.png",
      titulo: "Triathlon",
      depoimento:
        "É incrível tudo que você me ajudou a construir. Em 6 meses de consultoria, evoluí mais do que em 3 anos de treino. Excelente abordagem, excelentes explicações e um cuidado impecável, que me fizeram amar fazer dieta e me colocaram em outro patamar na minha evolução natural.",
    },
     {
      nome: "Hendrew Faggioni",
      foto: "/relatos/relato08.png",
      titulo: "Triathlon",
      depoimento:
        "Sobre a consultoria… tem sido de grande importância na minha vida. Tanto na questão psicológica quanto física, com seu acompanhamento consigo ter mais clareza em saber onde estou errando para poder melhorar a cada semana",
    },
    //  {
    //   nome: "Matheus Aguila",
    //   foto: "/relatos/relato09.png",
    //   titulo: "Triathlon",
    //   depoimento:
    //     "falta",
    // },
  ];
 function handleClick() {
    window.open(
      "https://wa.me/5516997572671?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20consultoria.",
      "_blank"
    );
  }
  return (
    <section id="relatos" className="relative bg-black text-neutral-100 py-20 px-6">
      {/* brilho sutil dourado */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(242,175,19,0.12), transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Relatos de <span className="text-amber-500/90" >Clientes</span>
          </h2>
          <p className="mt-4 text-neutral-300">
            Histórias reais de quem alcançou seus objetivos com acompanhamento personalizado,
            revisão semanal e estratégias que se encaixam na rotina.
          </p>
        </header>

        {/* divisor */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        {/* grid de relatos */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatos.map((r, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-amber-500/30 bg-neutral-900/40 p-6 shadow-2xl transition hover:border-amber-400/40"
            >
              {/* ícone aspas */}
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="absolute right-4 top-4 h-6 w-6 opacity-30 group-hover:opacity-50"
              >
                <path
                  fill="currentColor"
                  className="text-amber-500/90"
                  d="M7 11h3v6H5v-4a5 5 0 0 1 5-5v3a2 2 0 0 0-2 2H7zm9 0h3v6h-5v-4a5 5 0 0 1 5-5v3a2 2 0 0 0-2 2h-1z"
                />
              </svg>

              <p className="text-neutral-200">
                {r.depoimento}
              </p>

              <div className="mt-6 flex items-center gap-3">
                {/* avatar com iniciais */}
               <img
  src={r.foto}
  alt={r.nome}
  className="h-10 w-10 rounded-full border border-amber-500/40 object-cover"
/>

                <div className="leading-tight">
                  <div className="font-medium text-white">{r.nome}</div>
                  {/* <div className="text-xs text-neutral-400">{r.titulo}</div> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 flex justify-center">
          <a
             onClick={handleClick}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-400 bg-amber-400 px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-amber-500/90"
          >
            Quero fazer parte
          </a>
        </div>
      </div>
    </section>
  );
}

/* Util: pega iniciais para o avatar */
function getIniciais(nome) {
  if (!nome) return "•";
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
}
