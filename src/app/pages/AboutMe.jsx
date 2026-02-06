"use client";

export default function AboutMe() {
  return (
    <section className="relative bg-black text-neutral-100 py-8 sm:py-20 px-6" style={{
      background: "radial-gradient(circle at 50% 20%, #1a1a1a, #000 70%)",
    }}>
      {/* brilho dourado sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, rgba(242,175,19,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Foto redonda */}
        <div className="flex justify-center mb-4 sm:mb-8">
          <div className="relative">
            <img
              src="/jh/joaoBusiness.jpg"
              alt="João Herker"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover object-top border-t-2 border-b-2 border-amber-500 shadow-xl animate-float"
            />
          </div>
        </div>

        {/* Texto */}
        <p className="text-base sm:text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-12">
          Meu nome é <span className="text-amber-500/90 font-semibold">João Herker</span>, consultor e preparador de atletas. Ajudo meus clientes a alcançar seu máximo desempenho!
        </p>

        {/* Título Links */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white text-center">
          Links que podem te ajudar!
        </h2>
      </div>

      {/* divisor minimalista para separar a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </section>
  );
}

