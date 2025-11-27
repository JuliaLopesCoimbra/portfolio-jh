"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaGraduationCap, FaMedal } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function handleClick() {
   window.open(
  "https://wa.me/5516996931234?text=Ol%C3%A1%20Jo%C3%A3o!%20Acabei%20de%20dar%20uma%20olhada%20na%20consultoria%2C%20poderia%20me%20contar%20mais%20sobre%20os%20planos%20e%20valores%3F",
  "_blank"
);

  }


function PatternBG() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {/* brilho radial ao fundo */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[120vh] w-[120vh] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(242,175,19,0.18), rgba(242,175,19,0.08) 40%, transparent 70%)",
        }}
      />
      {/* linhas sutis diagonais */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="40" stroke="#f2af13" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs tracking-wide text-amber-500/90">
      {children}
    </span>
  );
}

function CTAButtons() {
  return (
    <div className="mt-8 flex w-full flex-col items-start gap-3 sm:flex-row">
      <button
        onClick={handleClick}
        className={classNames(
          "group inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition",
          "border-amber-500 bg-amber-400 text-black hover:bg-transparent hover:text-amber-500/90"
        )}
      >
        <FaWhatsapp className="text-lg transition group-hover:scale-110" />
        Quero saber sobre planos e valores
      </button>

      <a
        href="#about"
        className={classNames(
          "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition",
          "border-amber-500/60 text-amber-500/90 hover:border-amber-400 hover:text-amber-200"
        )}
      >
        Saiba Mais
      </a>
    </div>
  );
}

const Principal = () => {
  return (
    <section className="relative isolate overflow-hidden  text-neutral-100" style={{
    background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
  }}>
      <PatternBG />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-20 md:grid-cols-2 md:gap-16 md:px-10 lg:pt-24">
        {/* Texto */}
        <div className="relative z-10">
          <div className="mb-4 flex flex-wrap gap-2">
            <Pill>Nutrição esportiva de alta performance</Pill>
            <Pill>Atendimento personalizado</Pill>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-amber-500/90 sm:text-5xl">
            Bem-vindo ao ápice da <span className="text-white">nutrição esportiva</span>
          </h1>

          <p className="mt-4 max-w-prose text-base/relaxed text-neutral-300">
            Resultados consistentes com estratégia, ciência e acompanhamento de perto. Vamos fazer
            <span className="text-amber-500/90"> acontecer</span>.
          </p>

          <CTAButtons />

          {/* marquinhas minimalistas */}
          <div className="mt-10 flex items-center gap-6 text-xs text-neutral-400">
            <div className="h-px w-12 bg-amber-500/50" />
            <span>Acompanhamento semanal</span>
            <div className="h-px w-12 bg-amber-500/30" />
            <span>Planos sob medida</span>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative z-10 mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="relative rounded-3xl border border-amber-500/30 bg-neutral-900/40 p-2 shadow-2xl overflow-visible"style={{
  //  background: "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.5) 3%, #000 97%)",
}}
>
            <img
              src="/jh/joaoPrincipal.png"
              alt="Profissional de nutrição esportiva"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
            {/* moldura dourada sutil */}
            <div className="pointer-events-none absolute inset-2 rounded-2xl ring-1 ring-inset ring-amber-400/30" />

            {/* ====== BADGES FLUTUANTES ====== */}
            {/* 1. Badge esquerda (Atleta Growth) */}
       {/* 1. Badge esquerda (DarkLab) */}
<div className="flex items-center gap-2 absolute left-2 sm:left-0 top-1/3  -translate-x-[20%] sm:-translate-x-1/2 rounded-xl sm:rounded-2xl border border-amber-500/30 bg-black/70 backdrop-blur px-2 py-1 sm:px-4 sm:py-2 shadow-xl scale-90 sm:scale-100">
  <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-white">
    <img
      src="/logo/dark.png"
      alt="Logo DarkLab"
      className="h-6 w-6 sm:h-10 sm:w-10 object-contain"
    />
  </div>
  <span className="text-xs sm:text-sm text-neutral-100">Atleta DarkLab</span>
</div>

{/* 2. Badge direita (Nutrição e Pós Bodybuilding) */}
<div className="flex items-center gap-2 absolute right-2 sm:right-0 top-1/2 translate-x-[25%] sm:translate-x-1/3 -translate-y-1/2 rounded-xl sm:rounded-2xl border border-amber-500/30 bg-black/70 backdrop-blur px-2 py-1 sm:px-4 sm:py-2 shadow-xl scale-90 sm:scale-100">
  <FaGraduationCap className="text-amber-500/90 text-sm sm:text-base" />
  <span className="text-xs sm:text-sm text-neutral-100 text-right">
    Nutrição e Pós graduado<br />em Bodybuilding Coach
  </span>
</div>


            {/* 3. Badge inferior (avatares + métrica) */}
       <div className="absolute left-1/2 bottom-2 -translate-x-1/2 translate-y-1/2 
  rounded-2xl border border-amber-500/30 bg-black/70 backdrop-blur 
  px-3 py-2 shadow-xl w-[65vw] sm:w-[320px]">
  <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
    
    {/* grupo de avatares */}
    <div className="flex -space-x-1.5 sm:-space-x-2">
      <img src="/avatar/avatar1.jpeg" alt="" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-black object-cover" />
      <img src="/avatar/avatar2.jpeg" alt="" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-black object-cover" />
      <img src="/avatar/avatar3.jpeg" alt="" className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-black object-cover" />
      <div className="grid h-6 w-6 sm:h-8 sm:w-8 place-items-center rounded-full border border-black bg-neutral-800 text-[10px] sm:text-xs text-amber-500/90">+3</div>
    </div>

    {/* texto sempre visível */}
    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neutral-100">
      <FaMedal className="text-amber-500/90 text-sm sm:text-base" />
      <span className="whitespace-nowrap">1000+ vidas mudadas</span>
    </div>
  </div>
</div>


            {/* ====== /BADGES FLUTUANTES ====== */}
          </div>
        </div>
      </div>

      {/* divisor minimalista para separar a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
};

export default Principal;
