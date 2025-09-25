import Header from "./componentes/Header/Header";
import About from "./pages/About";
import Principal from "./pages/Principal";
import Relatos from "./pages/Relatos";
import Resultados from "./pages/Resultados";
import Video from "./pages/Video";
import Duvidas from "./pages/Duvidas";
import Planos from "./pages/Plano";
import Footer from "./pages/Footer";
import More from "./pages/More";
import AcompanhamentoSection from "./pages/ResultsHimSelf";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Principal />
        <Video />
        <AcompanhamentoSection />
        <About />
        <More />
        <Relatos />
        <Resultados />
        <Planos />
        <Duvidas />
        <Footer />
      </main>
    </>
  );
}

//colocar video