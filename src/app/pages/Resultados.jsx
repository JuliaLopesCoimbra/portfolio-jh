"use client";
import { useEffect, useRef, useState } from "react";

export default function AntesDepois() {
  const exemplos = [
    { antes: "/resultados/person1before.jpg", depois: "/resultados/person1after.jpg" },
    {   antes: "/resultados/person2before.jpg", depois: "/resultados/person2after.jpg" },
    {   antes: "/resultados/person3before.jpg", depois: "/resultados/person3after.jpg" },
   {   antes: "/resultados/person4before.jpg", depois: "/resultados/person4after.jpg" },
   {   antes: "/resultados/person5before.jpeg", depois: "/resultados/person5after.jpeg" },
  ];

  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    const el = viewportRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, exemplos.length - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section id="resultados" className="relative bg-black text-neutral-100 py-20 px-6" style={{
    background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
  }}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(242,175,19,0.15), transparent 60%)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Antes e <span className="text-amber-500/90">Depois</span>
          </h2>
          <p className="mt-4 text-neutral-300">Histórias reais de superação…</p>
        </header>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Resultados de clientes"
          onKeyDown={onKeyDown}
          tabIndex={0}
        >
          {/* Viewport */}
          <div
            ref={viewportRef}
            className="snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar relative w-full"
          >
            <div className="flex">
              {exemplos.map((ex, i) => (
                <div key={i} className="snap-center shrink-0 w-full px-1" aria-roledescription="slide" aria-label={`${i + 1} de ${exemplos.length}`}>
                  <div className="rounded-2xl border border-amber-500/30 bg-neutral-900/40 p-6 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-neutral-700">
                          <img
  src={ex.antes}
  alt={`${ex.nome ?? "Pessoa"} antes`}
  loading="lazy"
  className={`h-full w-full object-cover
    ${ex.antes === "/resultados/person2after.jpg" ? "object-[center_30%]" : ""}
    ${ex.antes === "/resultados/person3before.jpg" ? "object-[center_10%]" : ""}
     ${ex.antes === "/resultados/person4before.jpg" ? "object-[center_40%]" : ""}
    ${ex.antes === "/resultados/person5before.jpeg" ? "object-[center_20%]" : ""}
  `}
/>

                        </div>
                        <span className="mt-2 text-xs text-neutral-400 uppercase tracking-wide">Antes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-neutral-700">
                          <img
  src={ex.depois}
  alt={`${ex.nome ?? "Pessoa"} depois`}
  loading="lazy"
  className={`h-full w-full object-cover
    ${ex.depois === "/resultados/person2after.jpg" ? "object-top" : ""}
    ${ex.depois === "/resultados/person3after.jpg" ? "object-[center_10%]" : ""}
    ${ex.depois === "/resultados/person5after.jpeg" ? "object-[center_20%]" : ""}
  `}
/>

                        </div>
                        <span className="mt-2 text-xs text-amber-500/90 uppercase tracking-wide">Depois</span>
                      </div>
                    </div>
                    {/* <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-white">{ex.nome}</p>
                      <p className="text-sm text-amber-500/90">{ex.resultado}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

       {/* Setas */}
<button
  onClick={prev}
  aria-label="Slide anterior"
  disabled={index === 0}
  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-amber-500/40 bg-black/50 p-2 backdrop-blur transition hover:bg-black/70 disabled:opacity-40"
>
  {/* seta ESQUERDA */}
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500/90" aria-hidden="true">
    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
</button>

<button
  onClick={next}
  aria-label="Próximo slide"
  disabled={index === exemplos.length - 1}
  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-amber-500/40 bg-black/50 p-2 backdrop-blur transition hover:bg-black/70 disabled:opacity-40"
>
  {/* seta DIREITA (mesmo SVG, girado 180°) */}
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500/90 rotate-180" aria-hidden="true">
    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
</button>


          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {exemplos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-amber-400" : "bg-neutral-700 hover:bg-neutral-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CSS opcional pra esconder barra:
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
*/
