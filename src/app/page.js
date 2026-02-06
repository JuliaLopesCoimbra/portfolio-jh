import LinksSection from "./pages/LinksSection";
import AboutMe from "./pages/AboutMe";
import AnimateOnScroll from "./componentes/AnimateOnScroll/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll delay={0}>
        <AboutMe />
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <LinksSection />
      </AnimateOnScroll>
    </>
  );
}

//aumentar o tamanho das logos dentro dos blocos
//link titkok
//link dos blocos
//cadeado na plataforma
//foto começar mais pra baixo e por uma luz


