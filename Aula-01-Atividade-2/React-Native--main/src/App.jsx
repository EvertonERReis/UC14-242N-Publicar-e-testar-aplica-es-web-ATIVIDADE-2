// Tela inicial
// Usa vários componentes (aqui faremos a composição)

import Header from "./components/ui/header";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import CardImagem from "./components/ui/CardImagem";

import img1 from "./assets/computador.jpg";
import img2 from "./assets/cadeadocomvariasideias.jpg";
import img3 from "./assets/cadeadomagico.jpg";

function App({ onNavigation }) {
  return (
    <section className="page">
      
      <h1 className="titulo">
        Infraestrutura e Segurança da Informação
      </h1>

      <Header
        title="O que é Infraestrutura e Segurança da Informação"
        subtitle="Infraestrutura e Segurança da Informação envolvem o conjunto de tecnologias,
        sistemas e práticas responsáveis por garantir o funcionamento, a proteção e a
        integridade dos dados dentro de uma organização. Isso inclui redes, servidores,
        armazenamento e mecanismos de defesa contra acessos não autorizados."
      />

      {/* Separando componentes */}
      <div className="App">
        <h1>Cards sobre a ISI</h1>
      </div>

      <div className="container-cardsImagem">
        
        <CardImagem
          imagem={img2}
          alt="Imagem1"
          titulo="Primeiro Card"
          descricao="Olá sou o primeiro Card"
          textoBotao="Sou o botão do card1"
        />

        <CardImagem
          imagem={img1}
          alt="Imagem2"
          titulo="Segundo Card"
          descricao="Olá sou um card teste"
          textoBotao="Sou um botão do teste"
        />

        <CardImagem
          imagem={img3}
          alt="Imagem3"
          titulo="Terceiro Card"
          descricao="Olá sou um card teste2"
          textoBotao="Sou um botão do teste2"
        />

      </div>
    </section>
  );
}

export default App;